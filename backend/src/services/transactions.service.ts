import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WebhookPayloadDto } from 'src/dto/webhook-payload.dto';
import { Transaction } from 'src/entities/transaction.entity';
import { EntitiesServices } from 'src/providers/entities-services.provider';
import {
  dateFields,
  queryAliasMap,
  stringFields,
} from 'src/utils/constants/queryAliasMap';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transactionEntity: Repository<Transaction>,
    @Inject('ENTITIES_SERVICES')
    private readonly entities: EntitiesServices,
  ) {}
  public async webhook(payload: WebhookPayloadDto) {
    const { type, objectId, url, data } = payload;

    const [customer, card, fee, items, splits] = await Promise.all([
      this.entities.customer.findOrCreate(
        { email: data.customer.email },
        data.customer,
      ),
      this.entities.card.findOrCreate(
        {
          lastDigits: data.card.lastDigits,
          holderName: data.card.holderName,
        },
        data.card,
      ),
      this.entities.fee.create(data.fee),
      this.entities.item.createMany(data.items || []),
      this.entities.split.createMany(data.splits || []),
    ]);

    const transaction = this.transactionEntity.create({
      type,
      objectId,
      url,
      ...data,
      customer,
      card,
      fee,
      items,
      splits,
    });
    await this.transactionEntity.save(transaction);
    return transaction.id;
  }

  public async webhookPaid(transactionId: number) {
    return this.transactionEntity.update(
      { id: transactionId },
      { status: 'paid', paidAt: new Date() },
    );
  }

  public async findAll(filters: Record<string, string> = {}) {
    const qb = this.transactionEntity
      .createQueryBuilder('transaction')
      .leftJoinAndSelect('transaction.customer', 'customer')
      .leftJoinAndSelect('customer.address', 'address')
      .leftJoinAndSelect('customer.document', 'document')
      .leftJoinAndSelect('transaction.card', 'card')
      .leftJoinAndSelect('transaction.items', 'items')
      .leftJoinAndSelect('transaction.splits', 'splits')
      .leftJoinAndSelect('transaction.fee', 'fee');

    for (const key in filters) {
      const filterKey = queryAliasMap[key];

      if (!filterKey) {
        throw new BadRequestException('Params inválidos');
      }

      const [relation, column] = filterKey.includes('.')
        ? filterKey.split('.')
        : ['transaction', filterKey];

      const value = filters[key];

      if (stringFields.includes(key)) {
        qb.andWhere(
          `LOWER(${relation}.${column}) = LOWER(:${relation}_${column})`,
          {
            [`${relation}_${column}`]: value,
          },
        );
      } else if (dateFields.includes(key)) {
        qb.andWhere(`${relation}."${column}"::date = :${relation}_${column}`, {
          [`${relation}_${column}`]: value,
        });
      }
    }

    const items = await qb.getMany();
    return items;
  }
}

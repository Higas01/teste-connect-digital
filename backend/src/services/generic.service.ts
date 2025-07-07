import { Injectable } from '@nestjs/common';
import {
  Repository,
  DeepPartial,
  FindOptionsWhere,
  ObjectLiteral,
} from 'typeorm';

@Injectable()
export abstract class GenericService<T extends ObjectLiteral> {
  constructor(protected readonly repo: Repository<T>) {}

  async findOrCreate(where: FindOptionsWhere<T>, data: DeepPartial<T>) {
    let entity = await this.repo.findOne({ where });
    if (!entity) {
      const created = this.repo.create(data);
      entity = await this.repo.save(created);
    }
    return entity;
  }

  async createMany(data: DeepPartial<T>[]) {
    const entities = this.repo.create(data);
    return this.repo.save(entities);
  }

  async create(data: DeepPartial<T>) {
    const entity = this.repo.create(data);
    return this.repo.save(entity);
  }
}

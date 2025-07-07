import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SignatureMiddleware } from './common/middlewares/signature.middleware';
import { TransactionsController } from './controllers/transactions.controller';
import { SignatureService } from './services/signature.service';
import { TransactionsService } from './services/transactions.service';
import { Transaction } from './entities/transaction.entity';
import { Address } from './entities/address.entity';
import { Customer } from './entities/customer.entity';
import { Document } from './entities/document.entity';
import { Fee } from './entities/fee.entity';
import { Item } from './entities/item.entity';
import { Split } from './entities/split.entity';
import { Card } from './entities/card.entity';
import { EntitiesServicesProvider } from './providers/entities-services.provider';
import { CustomerService } from './services/customer.service';
import { CardService } from './services/card.service';
import { FeeService } from './services/fee.service';
import { ItemService } from './services/item.service';
import { SplitService } from './services/split.service';
import { PaymentService } from './services/payment.service';
import { PaymentsController } from './controllers/payments.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forFeature([
      Transaction,
      Address,
      Document,
      Customer,
      Fee,
      Item,
      Split,
      Card,
    ]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [TransactionsController, PaymentsController],
  providers: [
    TransactionsService,
    CustomerService,
    CardService,
    FeeService,
    ItemService,
    SplitService,
    SignatureService,
    EntitiesServicesProvider,
    PaymentService,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SignatureMiddleware).forRoutes('transactions/webhook');
  }
}

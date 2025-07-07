import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Transaction } from './transaction.entity';

@Entity()
export class Split {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  recipientId: number;

  @Column('decimal')
  amount: number;

  @Column('decimal')
  netAmount: number;

  @ManyToOne(() => Transaction, (transaction) => transaction.splits)
  transaction: Transaction;
}

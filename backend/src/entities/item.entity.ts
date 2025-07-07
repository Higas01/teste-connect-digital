import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Transaction } from './transaction.entity';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true })
  externalRef: string | null;

  @Column()
  title: string;

  @Column('decimal')
  unitPrice: number;

  @Column()
  quantity: number;

  @Column()
  tangible: boolean;

  @ManyToOne(() => Transaction, (transaction) => transaction.items)
  transaction: Transaction;
}

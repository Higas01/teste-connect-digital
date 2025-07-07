import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Customer } from './customer.entity';
import { Card } from './card.entity';
import { Item } from './item.entity';
import { Split } from './split.entity';
import { Fee } from './fee.entity';
import { IsOptional } from 'class-validator';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  objectId: string;

  @Column()
  url: string;

  @Column('decimal')
  amount: number;

  @Column('decimal')
  refundedAmount: number;

  @Column()
  companyId: number;

  @Column()
  installments: number;

  @Column()
  paymentMethod: string;

  @Column()
  status: string;

  @IsOptional()
  @Column({ type: 'varchar', nullable: true })
  postbackUrl: string | null;

  @Column({ type: 'json', nullable: true })
  metadata: any;

  @Column()
  traceable: boolean;

  @Column()
  secureId: string;

  @Column()
  secureUrl: string;

  @Column({ type: 'timestamp' })
  createdAt: Date;

  @Column({ type: 'timestamp' })
  updatedAt: Date;

  @IsOptional()
  @Column({ type: 'timestamp', nullable: true })
  paidAt: Date | null;

  @IsOptional()
  @Column({ type: 'varchar', nullable: true })
  ip: string | null;

  @IsOptional()
  @Column({ type: 'varchar', nullable: true })
  externalRef: string | null;

  @ManyToOne(() => Customer, { cascade: true, eager: true })
  @JoinColumn()
  customer: Customer;

  @ManyToOne(() => Card, { cascade: true, eager: true })
  @JoinColumn()
  card: Card;

  @OneToMany(() => Item, (item) => item.transaction, {
    cascade: true,
    eager: true,
  })
  items: Item[];

  @OneToMany(() => Split, (split) => split.transaction, {
    cascade: true,
    eager: true,
  })
  splits: Split[];

  @OneToOne(() => Fee, { cascade: true, eager: true })
  @JoinColumn()
  fee: Fee;
}

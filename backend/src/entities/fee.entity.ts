import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Fee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal')
  fixedAmount: number;

  @Column('decimal')
  spreadPercentage: number;

  @Column('decimal')
  estimatedFee: number;

  @Column('decimal')
  netAmount: number;
}

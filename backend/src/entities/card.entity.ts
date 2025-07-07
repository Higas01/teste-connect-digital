import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand: string;

  @Column()
  holderName: string;

  @Column()
  lastDigits: string;

  @Column()
  expirationMonth: number;

  @Column()
  expirationYear: number;

  @Column()
  reusable: boolean;

  @Column({ type: 'timestamp' })
  createdAt: Date;
}

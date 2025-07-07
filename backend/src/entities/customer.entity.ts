import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Address } from './address.entity';
import { Document } from './document.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true })
  externalRef: string | null;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ type: 'varchar', nullable: true })
  phone: string | null;

  @Column({ type: 'date', nullable: true })
  birthdate: Date | null;

  @Column({ type: 'date', nullable: true })
  createdAt: Date | null;

  @ManyToOne(() => Document, { cascade: true, eager: true })
  @JoinColumn()
  document: Document;

  @ManyToOne(() => Address, { cascade: true, eager: true })
  @JoinColumn()
  address: Address;
}

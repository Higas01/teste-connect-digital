import { Type } from 'class-transformer';
import {
  ValidateNested,
  IsNumber,
  IsString,
  IsOptional,
  IsBoolean,
  IsDate,
  IsArray,
  IsObject,
  IsDefined,
} from 'class-validator';
import { CardDto } from './card.dto';
import { ItemDto } from './item.dto';
import { SplitDto } from './split.dto';
import { FeeDto } from './fee.dto';
import { CustomerDto } from './customer.dto';

export class WebhookDataDto {
  @IsNumber()
  id: number;

  @IsNumber()
  amount: number;

  @IsNumber()
  refundedAmount: number;

  @IsNumber()
  companyId: number;

  @IsNumber()
  installments: number;

  @IsString()
  paymentMethod: string;

  @IsString()
  status: string;

  @IsOptional()
  @IsString()
  postbackUrl: string | null;

  @IsOptional()
  @IsObject()
  metadata: Record<string, any> | null;

  @IsBoolean()
  traceable: boolean;

  @IsString()
  secureId: string;

  @IsString()
  secureUrl: string;

  @IsDate()
  @Type(() => Date)
  createdAt: Date;

  @IsDate()
  @Type(() => Date)
  updatedAt: Date;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  paidAt: Date | null;

  @IsOptional()
  @IsString()
  ip: string | null;

  @IsOptional()
  @IsString()
  externalRef: string | null;

  @IsDefined()
  @ValidateNested()
  @Type(() => CustomerDto)
  customer: CustomerDto;

  @IsDefined()
  @ValidateNested()
  @Type(() => CardDto)
  card: CardDto;

  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ItemDto)
  items: ItemDto[];

  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SplitDto)
  splits: SplitDto[];

  @IsDefined()
  @ValidateNested()
  @Type(() => FeeDto)
  fee: FeeDto;
}

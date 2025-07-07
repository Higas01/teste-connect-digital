import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CardDto {
  @IsNumber()
  id: number;

  @IsString()
  brand: string;

  @IsString()
  holderName: string;

  @IsString()
  lastDigits: string;

  @IsNumber()
  expirationMonth: number;

  @IsNumber()
  expirationYear: number;

  @IsBoolean()
  reusable: boolean;

  @IsDate()
  @Type(() => Date)
  createdAt: Date;
}

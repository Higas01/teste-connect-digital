import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
  IsDefined,
} from 'class-validator';
import { AddressDto } from './address.dto';
import { DocumentDto } from './document.dto';

export class CustomerDto {
  @IsNumber()
  id: number;

  @IsOptional()
  @IsString()
  externalRef: string | null;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  phone: string | null;

  @IsOptional()
  @IsDate()
  birthDate: Date | null;

  @IsDate()
  @Type(() => Date)
  createdAt: Date;

  @IsDefined()
  @ValidateNested()
  @Type(() => DocumentDto)
  document: DocumentDto;

  @IsDefined()
  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;
}

import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class ItemDto {
  @IsOptional()
  @IsString()
  externalRef: string | null;

  @IsString()
  title: string;

  @IsNumber()
  unitPrice: number;

  @IsNumber()
  quantity: number;

  @IsBoolean()
  tangible: boolean;
}

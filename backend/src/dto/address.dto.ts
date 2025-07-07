import { IsString, IsOptional } from 'class-validator';

export class AddressDto {
  @IsString()
  street: string;

  @IsString()
  streetNumber: string;

  @IsOptional()
  @IsString()
  complement: string | null;

  @IsString()
  zipCode: string;

  @IsString()
  neighborhood: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  country: string;
}

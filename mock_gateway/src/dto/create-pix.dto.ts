import { IsString } from 'class-validator';

export class CreatePixDto {
  @IsString()
  description: string;
}

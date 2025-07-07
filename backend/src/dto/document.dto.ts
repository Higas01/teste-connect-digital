import { IsString } from 'class-validator';

export class DocumentDto {
  @IsString()
  number: string;

  @IsString()
  type: string;
}

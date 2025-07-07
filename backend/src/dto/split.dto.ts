import { IsNumber } from 'class-validator';

export class SplitDto {
  @IsNumber()
  recipientId: number;

  @IsNumber()
  amount: number;

  @IsNumber()
  netAmount: number;
}

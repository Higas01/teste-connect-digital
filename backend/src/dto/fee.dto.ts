import { IsNumber } from 'class-validator';

export class FeeDto {
  @IsNumber()
  fixedAmount: number;

  @IsNumber()
  spreadPercentage: number;

  @IsNumber()
  estimatedFee: number;

  @IsNumber()
  netAmount: number;
}

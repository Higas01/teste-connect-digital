import {
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { PaidService } from 'src/services/paid.service';

@Controller('paid')
export class PaidController {
  constructor(private readonly paidService: PaidService) {}

  @Post(':transactionId')
  @HttpCode(HttpStatus.OK)
  public paid(@Param('transactionId', ParseIntPipe) transactionId: number) {
    return this.paidService.paid(transactionId);
  }
}

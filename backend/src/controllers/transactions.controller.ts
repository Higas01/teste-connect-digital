import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Get,
  Query,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { TransactionsService } from 'src/services/transactions.service';
import { WebhookPayloadDto } from 'src/dto/webhook-payload.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('webhook')
  @HttpCode(HttpStatus.OK)
  public webhook(@Body() payload: WebhookPayloadDto) {
    return this.transactionsService.webhook(payload);
  }
  @Post('webhook/paid/:transactionId')
  @HttpCode(HttpStatus.NO_CONTENT)
  public webhookPaid(
    @Param('transactionId', ParseIntPipe) transactionId: number,
  ) {
    return this.transactionsService.webhookPaid(transactionId);
  }

  @Get()
  public findAll(@Query() params: Record<string, any>) {
    return this.transactionsService.findAll(params);
  }
}

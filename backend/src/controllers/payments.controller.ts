import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreatePixDto } from 'src/dto/create-pix.dto';
import { PaymentService } from 'src/services/payment.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('pix')
  @HttpCode(HttpStatus.OK)
  public createPix(@Body() payload: CreatePixDto) {
    return this.paymentService.generatePix(payload);
  }
}

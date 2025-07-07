import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PixService } from './services/payment_methods/pix.service';
import { PaymentService } from './services/payment.service';
import { PaidService } from './services/paid.service';
import { PaidController } from './controllers/paid.controller';
import { SignatureService } from './services/signature.service';
import { PaymentsController } from './controllers/payment.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [PaidController, PaymentsController],
  providers: [PixService, PaymentService, PaidService, SignatureService],
})
export class AppModule {}

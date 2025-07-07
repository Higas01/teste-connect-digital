import {
  BadRequestException,
  HttpCode,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { PixService } from './payment_methods/pix.service';
import { SignatureService } from './signature.service';
import { transaction } from 'src/utils/fakeData';

@Injectable()
export class PaymentService {
  constructor(
    private readonly pixService: PixService,
    private readonly signatureService: SignatureService,
  ) {}

  @HttpCode(HttpStatus.CREATED)
  async generatePix(description: string) {
    const url = process.env.WEBHOOK_URL;
    const signatureSecret = process.env.SIGNATURE_SECRET;

    if (!url || !signatureSecret) {
      throw Error(
        'API_URL or SIGNATURE_SECRET is not defined in environment variables',
      );
    }

    const signature = this.signatureService.generateSignature(
      transaction,
      signatureSecret,
    );
    const { qr_code_image_base64, qr_code_copy_paste } =
      await this.pixService.create(description);

    const transactionRequest = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-signature': signature,
      },
      body: JSON.stringify(transaction),
    });
    const id = (await transactionRequest.json()) as number;
    if (!transactionRequest.ok) {
      throw new BadRequestException(
        `Failed to send transaction notification: ${transactionRequest.statusText}`,
      );
    }
    return { qr_code_image_base64, qr_code_copy_paste, transactionId: id };
  }
}

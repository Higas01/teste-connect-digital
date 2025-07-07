import { BadRequestException, Injectable } from '@nestjs/common';
import { SignatureService } from './signature.service';

@Injectable()
export class PaidService {
  constructor(private readonly signatureService: SignatureService) {}

  async paid(transactionId: number) {
    const url = process.env.WEBHOOK_URL;
    const signatureSecret = process.env.SIGNATURE_SECRET;

    if (!url || !signatureSecret) {
      throw Error(
        'API_URL or SIGNATURE_SECRET is not defined in environment variables',
      );
    }

    const signature = this.signatureService.generateSignature(
      {},
      signatureSecret,
    );

    const paid = await fetch(`${url}/paid/${transactionId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-signature': signature,
      },
    });
    if (!paid.ok) {
      throw new BadRequestException(
        `Failed to send paid notification: ${paid.statusText}`,
      );
    }

    return {
      status: 'success',
      message: 'Paid notification sent successfully',
    };
  }
}

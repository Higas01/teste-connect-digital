import { Injectable } from '@nestjs/common';
@Injectable()
export class PaymentService {
  public async generatePix(payload: { description: string }) {
    const gatewayUrl = process.env.GATEWAY_URL;

    if (!gatewayUrl) {
      throw new Error(
        'GATEWAY_URL is not defined in the environment variables',
      );
    }
    const response = await fetch(`${gatewayUrl}/payments/pix`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const data = (await response.json()) as {
      qr_code_image_base64: string;
      qr_code_copy_paste: string;
      transaction_id: string;
    };
    return data;
  }
}

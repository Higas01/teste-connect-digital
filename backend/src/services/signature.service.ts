import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class SignatureService {
  public isValidSignature(
    payload: any,
    headerSignature: string,
    secret: string,
  ): boolean {
    const hash = crypto
      .createHmac('sha256', secret)
      .update(JSON.stringify(payload))
      .digest('hex');

    return hash === headerSignature;
  }
}

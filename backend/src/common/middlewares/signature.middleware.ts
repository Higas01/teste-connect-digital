import {
  ForbiddenException,
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';
import { SignatureService } from 'src/services/signature.service';

interface WebhookPayload {
  id: number;
  type: string;
  objectId: string;
  url: string;
  data: any;
}
@Injectable()
export class SignatureMiddleware implements NestMiddleware {
  constructor(
    private readonly configService: ConfigService,
    private readonly signatureService: SignatureService,
  ) {}

  use(req: Request<WebhookPayload>, res: Response, next: () => void) {
    const signature = req.headers['x-signature'] as string;
    const payload = req.body as WebhookPayload;
    const secret = this.configService.get<string>('SIGNATURE_SECRET');
    if (!secret) {
      throw new Error(
        'SIGNATURE_SECRET is not defined in the environment variables',
      );
    }

    if (!payload) {
      throw new ForbiddenException('Payload is missing');
    }

    const isValidSignature = this.signatureService.isValidSignature(
      payload,
      signature,
      secret,
    );

    if (!isValidSignature) {
      throw new UnauthorizedException('Invalid signature');
    }

    next();
  }
}

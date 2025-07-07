import { Injectable } from '@nestjs/common';
import { toDataURL } from 'qrcode';

@Injectable()
export class PixService {
  async create(text: string) {
    const base64 = await toDataURL(text);
    return {
      qr_code_image_base64: base64,
      qr_code_copy_paste: `00020126360014BR.GOV.BCB.PIX0114+551199999999520400005303986540510.005802BR5913XXXXXXX6009SAO PAULO62070503***`,
    };
  }
}

import {
  IsDefined,
  IsNumber,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { WebhookDataDto } from './webhook-data.dto';

export class WebhookPayloadDto {
  @IsNumber()
  id: number;

  @IsString()
  type: string;

  @IsString()
  objectId: string;

  @IsUrl()
  url: string;

  @IsDefined()
  @ValidateNested()
  @Type(() => WebhookDataDto)
  data: WebhookDataDto;
}

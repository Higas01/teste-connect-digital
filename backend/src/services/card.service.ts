import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from 'src/entities/card.entity';
import { Repository } from 'typeorm';
import { GenericService } from './generic.service';

@Injectable()
export class CardService extends GenericService<Card> {
  constructor(
    @InjectRepository(Card)
    repo: Repository<Card>,
  ) {
    super(repo);
  }
}

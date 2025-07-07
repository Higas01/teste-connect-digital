import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/entities/item.entity';
import { Repository } from 'typeorm';
import { GenericService } from './generic.service';

@Injectable()
export class ItemService extends GenericService<Item> {
  constructor(
    @InjectRepository(Item)
    repo: Repository<Item>,
  ) {
    super(repo);
  }
}

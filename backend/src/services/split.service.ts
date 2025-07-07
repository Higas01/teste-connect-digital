import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Split } from 'src/entities/split.entity';
import { Repository } from 'typeorm';
import { GenericService } from './generic.service';

@Injectable()
export class SplitService extends GenericService<Split> {
  constructor(
    @InjectRepository(Split)
    repo: Repository<Split>,
  ) {
    super(repo);
  }
}

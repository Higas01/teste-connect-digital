import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fee } from 'src/entities/fee.entity';
import { Repository } from 'typeorm';
import { GenericService } from './generic.service';

@Injectable()
export class FeeService extends GenericService<Fee> {
  constructor(
    @InjectRepository(Fee)
    repo: Repository<Fee>,
  ) {
    super(repo);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/entities/customer.entity';
import { Repository } from 'typeorm';
import { GenericService } from './generic.service';

@Injectable()
export class CustomerService extends GenericService<Customer> {
  constructor(
    @InjectRepository(Customer)
    repo: Repository<Customer>,
  ) {
    super(repo);
  }
}

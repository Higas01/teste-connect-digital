import { CardService } from 'src/services/card.service';
import { CustomerService } from 'src/services/customer.service';
import { FeeService } from 'src/services/fee.service';
import { ItemService } from 'src/services/item.service';
import { SplitService } from 'src/services/split.service';

export interface EntitiesServices {
  customer: CustomerService;
  card: CardService;
  fee: FeeService;
  item: ItemService;
  split: SplitService;
}

export const EntitiesServicesProvider = {
  provide: 'ENTITIES_SERVICES',
  useFactory: (
    customer: CustomerService,
    card: CardService,
    fee: FeeService,
    item: ItemService,
    split: SplitService,
  ) => ({
    customer,
    card,
    fee,
    item,
    split,
  }),
  inject: [
    CustomerService,
    CardService,
    FeeService,
    ItemService,
    SplitService,
  ],
};

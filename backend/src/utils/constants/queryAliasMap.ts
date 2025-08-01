export const queryAliasMap: Record<string, string> = {
  id: 'transaction.id',
  ObjectId: 'transaction.objectId',
  type: 'transaction.type',
  url: 'transaction.url',
  amount: 'transaction.amount',
  refundedAmount: 'transaction.refundedAmount',
  companyId: 'transaction.companyId',
  installments: 'transaction.installments',
  paymentMethod: 'transaction.paymentMethod',
  status: 'transaction.status',
  postbackUrl: 'transaction.postbackUrl',
  metadata: 'transaction.metadata',
  traceable: 'transaction.traceable',
  secureId: 'transaction.secureId',
  secureUrl: 'transaction.secureUrl',
  createdAt: 'transaction.createdAt',
  updatedAt: 'transaction.updatedAt',
  paidAt: 'transaction.paidAt',
  street: 'address.street',
  streetNumber: 'address.streetNumber',
  complement: 'address.complement',
  zipCode: 'address.zipCode',
  neighborhood: 'address.neighborhood',
  city: 'address.city',
  state: 'address.state',
  country: 'address.country',
  brand: 'card.brand',
  holderName: 'card.holderName',
  lastDigits: 'card.lastDigits',
  expirationMonth: 'card.expirationMonth',
  expirationYear: 'card.expirationYear',
  reusable: 'card.reusable',
  externalRef: 'customer.externalRef',
  customer: 'customer.name',
  email: 'customer.email',
  phone: 'customer.phone',
  birthdate: 'customer.birthdate',
  number: 'document.number',
  documentType: 'document.type',
  fixedAmount: 'fee.fixedAmount',
  spreadPercentage: 'fee.spreadPercentage',
  estimatedFee: 'fee.estimatedFee',
  netAmount: 'fee.netAmount',
  itemExternalRef: 'item.externalRef',
  title: 'item.title',
  unitPrice: 'item.unitPrice',
  quantity: 'item.quantity',
  tangible: 'item.tangible',
  recipientId: 'splits.recipientId',
  splitAmount: 'splits.amount',
  splitNetAmount: 'splits.splitNetAmount',
};

export const stringFields = [
  'type',
  'objectId',
  'url',
  'paymentMethod',
  'status',
  'postbackUrl',
  'metadata',
  'secureId',
  'secureUrl',
  'street',
  'streetNumber',
  'complement',
  'zipCode',
  'neighborhood',
  'city',
  'state',
  'country',
  'brand',
  'holderName',
  'lastDigits',
  'externalRef',
  'customer',
  'email',
  'phone',
  'number',
  'documentType',
  'itemExternalRef',
  'title',
  'refundedAmount',
  'amount',
  'fixedAmount',
  'spreadPercentage',
  'estimatedFee',
  'netAmount',
  'unitPrice',
];

export const numberFields = [
  'companyId',
  'installments',
  'expirationMonth',
  'expirationYear',
  'recipientId',
  'quantity',
]

export const dateFields = [
  'paidAt',
  'createdAt',
  'updatedAt',
  'birthdate',
];

export const booleanFields = [
  'traceable',
  'reusable',
  'tangible',
]

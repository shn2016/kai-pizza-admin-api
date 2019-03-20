import {Entity, model, property} from '@loopback/repository';

@model()
export class Order extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  userId: number;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  orderItems: object[];


  constructor(data?: Partial<Order>) {
    super(data);
  }
}

import {Entity, model, property} from '@loopback/repository';

@model()
export class OrderItem extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  productId: number;

  @property({
    type: 'number',
    required: true,
  })
  orderId: number;

  @property({
    type: 'number',
    required: true,
  })
  productQuantity: number;

  @property({
    type: 'number',
  })
  oderItemPrice?: number;


  constructor(data?: Partial<OrderItem>) {
    super(data);
  }
}

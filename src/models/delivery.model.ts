import {Entity, model, property} from '@loopback/repository';

@model()
export class Delivery extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  orderId: number;

  @property({
    type: 'string',
    required: true,
  })
  status: string;


  constructor(data?: Partial<Delivery>) {
    super(data);
  }
}

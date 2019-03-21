import {Entity, model, property} from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
  })
  fisrtName?: string;

  @property({
    type: 'string',
  })
  lastName?: string;

  @property({
    type: 'number',
    required: true,
  })
  phone: number;


  constructor(data?: Partial<User>) {
    super(data);
  }
}

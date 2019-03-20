import {DefaultCrudRepository} from '@loopback/repository';
import {Delivery} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DeliveryRepository extends DefaultCrudRepository<
  Delivery,
  typeof Delivery.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Delivery, dataSource);
  }
}

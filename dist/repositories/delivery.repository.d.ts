import { DefaultCrudRepository } from '@loopback/repository';
import { Delivery } from '../models';
import { DbDataSource } from '../datasources';
export declare class DeliveryRepository extends DefaultCrudRepository<Delivery, typeof Delivery.prototype.id> {
    constructor(dataSource: DbDataSource);
}

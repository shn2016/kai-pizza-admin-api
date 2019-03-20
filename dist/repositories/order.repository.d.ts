import { DefaultCrudRepository } from '@loopback/repository';
import { Order } from '../models';
import { DbDataSource } from '../datasources';
export declare class OrderRepository extends DefaultCrudRepository<Order, typeof Order.prototype.id> {
    constructor(dataSource: DbDataSource);
}

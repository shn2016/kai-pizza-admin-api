import { Entity } from '@loopback/repository';
export declare class Order extends Entity {
    id?: number;
    userId: number;
    status: string;
    orderItems: object[];
    constructor(data?: Partial<Order>);
}

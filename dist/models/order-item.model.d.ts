import { Entity } from '@loopback/repository';
export declare class OrderItem extends Entity {
    productId: number;
    orderId: number;
    productQuantity: number;
    oderItemPrice?: number;
    constructor(data?: Partial<OrderItem>);
}

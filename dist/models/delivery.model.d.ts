import { Entity } from '@loopback/repository';
export declare class Delivery extends Entity {
    id?: number;
    orderId: number;
    status: string;
    constructor(data?: Partial<Delivery>);
}

import { Entity } from '@loopback/repository';
export declare class Product extends Entity {
    id?: number;
    name: string;
    type: string;
    image: string;
    price: number;
    constructor(data?: Partial<Product>);
}

import { Count, Filter, Where } from '@loopback/repository';
import { Delivery } from '../models';
import { DeliveryRepository } from '../repositories';
export declare class DeliveryController {
    deliveryRepository: DeliveryRepository;
    constructor(deliveryRepository: DeliveryRepository);
    create(delivery: Delivery): Promise<Delivery>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<Delivery[]>;
    updateAll(delivery: Delivery, where?: Where): Promise<Count>;
    findById(id: number): Promise<Delivery>;
    updateById(id: number, delivery: Delivery): Promise<void>;
    replaceById(id: number, delivery: Delivery): Promise<void>;
    deleteById(id: number): Promise<void>;
}

import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: number;
    email: string;
    password: string;
    fisrtName?: string;
    lastName?: string;
    phone: number;
    constructor(data?: Partial<User>);
}

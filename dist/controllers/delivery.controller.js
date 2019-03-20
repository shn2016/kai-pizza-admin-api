"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let DeliveryController = class DeliveryController {
    constructor(deliveryRepository) {
        this.deliveryRepository = deliveryRepository;
    }
    async create(delivery) {
        return await this.deliveryRepository.create(delivery);
    }
    async count(where) {
        return await this.deliveryRepository.count(where);
    }
    async find(filter) {
        return await this.deliveryRepository.find(filter);
    }
    async updateAll(delivery, where) {
        return await this.deliveryRepository.updateAll(delivery, where);
    }
    async findById(id) {
        return await this.deliveryRepository.findById(id);
    }
    async updateById(id, delivery) {
        await this.deliveryRepository.updateById(id, delivery);
    }
    async replaceById(id, delivery) {
        await this.deliveryRepository.replaceById(id, delivery);
    }
    async deleteById(id) {
        await this.deliveryRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/delivery', {
        responses: {
            '200': {
                description: 'Delivery model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Delivery } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Delivery]),
    __metadata("design:returntype", Promise)
], DeliveryController.prototype, "create", null);
__decorate([
    rest_1.get('/delivery/count', {
        responses: {
            '200': {
                description: 'Delivery model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Delivery))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DeliveryController.prototype, "count", null);
__decorate([
    rest_1.get('/delivery', {
        responses: {
            '200': {
                description: 'Array of Delivery model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Delivery } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Delivery))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DeliveryController.prototype, "find", null);
__decorate([
    rest_1.patch('/delivery', {
        responses: {
            '200': {
                description: 'Delivery PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Delivery))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Delivery, Object]),
    __metadata("design:returntype", Promise)
], DeliveryController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/delivery/{id}', {
        responses: {
            '200': {
                description: 'Delivery model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Delivery } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DeliveryController.prototype, "findById", null);
__decorate([
    rest_1.patch('/delivery/{id}', {
        responses: {
            '204': {
                description: 'Delivery PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Delivery]),
    __metadata("design:returntype", Promise)
], DeliveryController.prototype, "updateById", null);
__decorate([
    rest_1.put('/delivery/{id}', {
        responses: {
            '204': {
                description: 'Delivery PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Delivery]),
    __metadata("design:returntype", Promise)
], DeliveryController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/delivery/{id}', {
        responses: {
            '204': {
                description: 'Delivery DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DeliveryController.prototype, "deleteById", null);
DeliveryController = __decorate([
    __param(0, repository_1.repository(repositories_1.DeliveryRepository)),
    __metadata("design:paramtypes", [repositories_1.DeliveryRepository])
], DeliveryController);
exports.DeliveryController = DeliveryController;
//# sourceMappingURL=delivery.controller.js.map
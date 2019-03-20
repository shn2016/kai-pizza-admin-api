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
let OrderController = class OrderController {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async create(order) {
        return await this.orderRepository.create(order);
    }
    async count(where) {
        return await this.orderRepository.count(where);
    }
    async find(filter) {
        return await this.orderRepository.find(filter);
    }
    async updateAll(order, where) {
        return await this.orderRepository.updateAll(order, where);
    }
    async findById(id) {
        return await this.orderRepository.findById(id);
    }
    async updateById(id, order) {
        await this.orderRepository.updateById(id, order);
    }
    async replaceById(id, order) {
        await this.orderRepository.replaceById(id, order);
    }
    async deleteById(id) {
        await this.orderRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/order', {
        responses: {
            '200': {
                description: 'Order model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Order } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Order]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "create", null);
__decorate([
    rest_1.get('/order/count', {
        responses: {
            '200': {
                description: 'Order model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Order))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "count", null);
__decorate([
    rest_1.get('/order', {
        responses: {
            '200': {
                description: 'Array of Order model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Order } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Order))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "find", null);
__decorate([
    rest_1.patch('/order', {
        responses: {
            '200': {
                description: 'Order PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Order))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Order, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/order/{id}', {
        responses: {
            '200': {
                description: 'Order model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Order } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "findById", null);
__decorate([
    rest_1.patch('/order/{id}', {
        responses: {
            '204': {
                description: 'Order PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Order]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "updateById", null);
__decorate([
    rest_1.put('/order/{id}', {
        responses: {
            '204': {
                description: 'Order PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Order]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/order/{id}', {
        responses: {
            '204': {
                description: 'Order DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "deleteById", null);
OrderController = __decorate([
    __param(0, repository_1.repository(repositories_1.OrderRepository)),
    __metadata("design:paramtypes", [repositories_1.OrderRepository])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map
import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Delivery} from '../models';
import {DeliveryRepository} from '../repositories';

export class DeliveryController {
  constructor(
    @repository(DeliveryRepository)
    public deliveryRepository : DeliveryRepository,
  ) {}

  @post('/delivery', {
    responses: {
      '200': {
        description: 'Delivery model instance',
        content: {'application/json': {schema: {'x-ts-type': Delivery}}},
      },
    },
  })
  async create(@requestBody() delivery: Delivery): Promise<Delivery> {
    return await this.deliveryRepository.create(delivery);
  }

  @get('/delivery/count', {
    responses: {
      '200': {
        description: 'Delivery model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Delivery)) where?: Where,
  ): Promise<Count> {
    return await this.deliveryRepository.count(where);
  }

  @get('/delivery', {
    responses: {
      '200': {
        description: 'Array of Delivery model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Delivery}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Delivery)) filter?: Filter,
  ): Promise<Delivery[]> {
    return await this.deliveryRepository.find(filter);
  }

  @patch('/delivery', {
    responses: {
      '200': {
        description: 'Delivery PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() delivery: Delivery,
    @param.query.object('where', getWhereSchemaFor(Delivery)) where?: Where,
  ): Promise<Count> {
    return await this.deliveryRepository.updateAll(delivery, where);
  }

  @get('/delivery/{id}', {
    responses: {
      '200': {
        description: 'Delivery model instance',
        content: {'application/json': {schema: {'x-ts-type': Delivery}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Delivery> {
    return await this.deliveryRepository.findById(id);
  }

  @patch('/delivery/{id}', {
    responses: {
      '204': {
        description: 'Delivery PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() delivery: Delivery,
  ): Promise<void> {
    await this.deliveryRepository.updateById(id, delivery);
  }

  @put('/delivery/{id}', {
    responses: {
      '204': {
        description: 'Delivery PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() delivery: Delivery,
  ): Promise<void> {
    await this.deliveryRepository.replaceById(id, delivery);
  }

  @del('/delivery/{id}', {
    responses: {
      '204': {
        description: 'Delivery DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.deliveryRepository.deleteById(id);
  }
}

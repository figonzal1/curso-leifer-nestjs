import { Injectable } from '@nestjs/common';
import { CreateEjecutivoDto } from './dto/create-ejecutivo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Ejecutivo } from './schema/ejecutivo.schema';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';

@Injectable()
export class EjecutivosService {
  constructor(
    @InjectModel(Ejecutivo.name)
    private ejecutivosModule: Model<Ejecutivo>,
  ) {}

  async create(createEjecutivoDto: CreateEjecutivoDto) {
    return await this.ejecutivosModule.create(createEjecutivoDto);
  }

  async findAll() {
    return await this.ejecutivosModule.find({});
  }

  async findOne(id: string) {
    return await this.ejecutivosModule.findOne({
      _id: new ObjectId(id),
    });
  }
}

import { Injectable } from '@nestjs/common';
import { CreateEjecutivoDto } from './dto/create-ejecutivo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Ejecutivos, EjecutivosDocument } from './schema/ejecutivo.schema';
import { Model } from 'mongoose';

@Injectable()
export class EjecutivosService {
  constructor(
    @InjectModel(Ejecutivos.name)
    private ejecutivosModule: Model<EjecutivosDocument>,
  ) {}

  async create(createEjecutivoDto: CreateEjecutivoDto) {
    return await this.ejecutivosModule.create(createEjecutivoDto);
  }

  async findAll() {
    return await this.ejecutivosModule.find({});
  }

  async findOne(id: number) {
    return await this.ejecutivosModule.findOne({ _id: id });
  }
}

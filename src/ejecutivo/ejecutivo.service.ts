import { Injectable } from '@nestjs/common';
import { CreateEjecutivoDto } from './dto/create-ejecutivo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Ejecutivo } from './entities/ejecutivo.entity';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';

@Injectable()
export class EjecutivoService {
  constructor(
    @InjectModel(Ejecutivo.name)
    private ejecutivoModel: Model<Ejecutivo>,
  ) {}
  async create(createEjecutivoDto: CreateEjecutivoDto) {
    return await this.ejecutivoModel.create(createEjecutivoDto);
  }

  async findAll() {
    return await this.ejecutivoModel.find({}).populate('sucursal');
  }

  async findOne(id: string) {
    return await this.ejecutivoModel
      .findOne({
        _id: new ObjectId(id),
      })
      .populate('sucursal');
  }
}

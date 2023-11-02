import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sucursal } from './entities/sucursal.entity';
import { CreateSucursalDto } from './dto/create-sucursal.dto';

@Injectable()
export class SucursalService {
  constructor(
    @InjectModel(Sucursal.name)
    private sucursalModel: Model<Sucursal>,
  ) {}

  async create(createSucursalDto: CreateSucursalDto) {
    return await this.sucursalModel.create(createSucursalDto);
  }

  async findAll() {
    return await this.sucursalModel.find({}).exec();
  }

  async findOne(id: number) {
    return await this.sucursalModel.findById(id).exec();
  }
}

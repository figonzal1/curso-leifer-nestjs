import { Injectable } from '@nestjs/common';
import { Sucursal } from './schema/sucursal.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSucursaleDto } from './dto/create-sucursale.dto';

@Injectable()
export class SucursalesService {
  constructor(
    @InjectModel(Sucursal.name)
    private sucursalesModel: Model<Sucursal>,
  ) {}

  async create(createSucursalDto: CreateSucursaleDto) {
    return await this.sucursalesModel.create(createSucursalDto);
  }

  async findAll() {
    return await this.sucursalesModel.find({}).exec();
  }

  async findOne(id: number) {
    return await this.sucursalesModel.findById(id).exec();
  }
}

import { Injectable } from '@nestjs/common';
import { CreateEjecutivoDto } from './dto/create-ejecutivo.dto';

@Injectable()
export class EjecutivosService {
  create(createEjecutivoDto: CreateEjecutivoDto) {
    return 'This action adds a new ejecutivo';
  }

  findAll() {
    return `This action returns all ejecutivos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ejecutivo`;
  }
}

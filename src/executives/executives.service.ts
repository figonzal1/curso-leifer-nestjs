import { Injectable } from '@nestjs/common';
import { CreateExecutiveDto } from './dto/create-executive.dto';

@Injectable()
export class ExecutivesService {
  create(createExecutiveDto: CreateExecutiveDto) {
    return 'This action adds a new executive';
  }

  findAll() {
    return [
      {
        nombre: 'Felipe',
        apellido: 'Gonzalez',
        rut: '18.782.434-6',
        email: 'felipe@email.com',
      },
      {
        nombre: 'Sebastian',
        arguments: 'Gómez',
        rut: '18.233.123-5',
        email: 'sebastian@email.com',
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} executive`;
  }
}

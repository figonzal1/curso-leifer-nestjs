import { Injectable } from '@nestjs/common';

@Injectable()
export class SucursalesService {

  findAll() {
    return [
      {
        nombre: 'Santa cruz',
      },
      {
        nombre: 'Santiago',
      },
      {
        nombre: 'Providencia',
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} sucursale`;
  }
}

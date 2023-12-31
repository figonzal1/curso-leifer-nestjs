import { Injectable } from '@nestjs/common';
import { SucursalService } from 'src/sucursal/sucursal.service';

@Injectable()
export class DataLoaderService {
  constructor(private readonly sucursalService: SucursalService) {}

  async loadData() {
    // Aquí puedes agregar la lógica para cargar tus datos
    // Por ejemplo, podrías crear nuevos "ejecutivos" si no existen en la base de datos
    const sucursales = await this.sucursalService.findAll();

    if (sucursales.length == 0) {
      await this.sucursalService.create({
        nombre: 'Santa Cruz',
      });

      await this.sucursalService.create({
        nombre: 'Providencia',
      });

      await this.sucursalService.create({
        nombre: 'Las Condes',
      });

      await this.sucursalService.create({
        nombre: 'San bernardo',
      });

      await this.sucursalService.create({
        nombre: 'Puente alto',
      });
    }
  }
}

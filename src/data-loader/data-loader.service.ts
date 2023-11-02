import { Injectable } from '@nestjs/common';
import { SucursalesService } from 'src/sucursales/sucursales.service';

@Injectable()
export class DataLoaderService {
  constructor(private readonly sucursalService: SucursalesService) {}

  async loadData() {
    // Aquí puedes agregar la lógica para cargar tus datos
    // Por ejemplo, podrías crear nuevos "ejecutivos" si no existen en la base de datos
    const surcursales = await this.sucursalService.findAll();

    if (surcursales.length == 0) {
		
      await this.sucursalService.create({
        nombre: 'Santa Cruz',
      });

      await this.sucursalService.create({
        nombre: 'Providencia',
      });

      await this.sucursalService.create({
        nombre: 'Providencia',
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

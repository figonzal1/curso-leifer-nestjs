import { Controller, Get, Param } from '@nestjs/common';
import { SucursalesService } from './sucursales.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('sucursales')
@Controller('sucursales')
export class SucursalesController {
  constructor(private readonly sucursalesService: SucursalesService) {}

  @Get()
  findAll() {
    return this.sucursalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sucursalesService.findOne(+id);
  }
}

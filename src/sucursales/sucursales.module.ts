import { Module } from '@nestjs/common';
import { SucursalesService } from './sucursales.service';
import { SucursalesController } from './sucursales.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Sucursal, SucursalSchema } from './schema/sucursal.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Sucursal.name,
        schema: SucursalSchema,
      },
    ]),
  ],
  controllers: [SucursalesController],
  providers: [SucursalesService],
  exports: [SucursalesService],
})
export class SucursalesModule {}

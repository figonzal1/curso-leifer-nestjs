import { Module } from '@nestjs/common';
import { EjecutivosService } from './ejecutivos.service';
import { EjecutivosController } from './ejecutivos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ejecutivo, EjecutivoSchema } from './schema/ejecutivo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Ejecutivo.name,
        schema: EjecutivoSchema,
      },
    ]),
  ],
  controllers: [EjecutivosController],
  providers: [EjecutivosService],
})
export class EjecutivosModule {}

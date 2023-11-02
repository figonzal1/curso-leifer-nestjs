import { Module } from '@nestjs/common';
import { EjecutivosService } from './ejecutivos.service';
import { EjecutivosController } from './ejecutivos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ejecutivos, EjecutivosSchema } from './schema/ejecutivo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Ejecutivos.name,
        schema: EjecutivosSchema,
      },
    ]),
  ],
  controllers: [EjecutivosController],
  providers: [EjecutivosService],
})
export class EjecutivosModule {}

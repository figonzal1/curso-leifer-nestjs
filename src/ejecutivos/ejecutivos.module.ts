import { Module } from '@nestjs/common';
import { EjecutivosService } from './ejecutivos.service';
import { EjecutivosController } from './ejecutivos.controller';

@Module({
  controllers: [EjecutivosController],
  providers: [EjecutivosService],
})
export class EjecutivosModule {}

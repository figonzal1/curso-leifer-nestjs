import { Module } from '@nestjs/common';
import { EjecutivoService } from './ejecutivo.service';
import { EjecutivoController } from './ejecutivo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EjecutivoSchema } from 'src/ejecutivo/schema/ejecutivo.schema';
import { Ejecutivo } from './entities/ejecutivo.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Ejecutivo.name,
        schema: EjecutivoSchema,
      },
    ]),
  ],
  controllers: [EjecutivoController],
  providers: [EjecutivoService],
})
export class EjecutivoModule {}

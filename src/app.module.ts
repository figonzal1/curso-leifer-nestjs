import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SucursalesModule } from './sucursales/sucursales.module';
import { EjecutivosModule } from './ejecutivos/ejecutivos.module';

@Module({
  imports: [SucursalesModule, EjecutivosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

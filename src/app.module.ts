import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SucursalesModule } from './sucursales/sucursales.module';
import { EjecutivosModule } from './ejecutivos/ejecutivos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    SucursalesModule,
    EjecutivosModule,
    MongooseModule.forRoot(
      'mongodb://root:example@localhost:27017/nest?authSource=admin',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

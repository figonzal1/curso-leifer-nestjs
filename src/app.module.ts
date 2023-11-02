import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SucursalesModule } from './sucursales/sucursales.module';
import { EjecutivosModule } from './ejecutivos/ejecutivos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DataLoaderService } from './data-loader/data-loader.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:example@localhost:27017/nest?authSource=admin',
    ),
    SucursalesModule,
    EjecutivosModule,
  ],
  controllers: [AppController],
  providers: [AppService, DataLoaderService],
})
export class AppModule {
  constructor(private readonly dataLoaderService: DataLoaderService) {}

  async onModuleInit() {
    await this.dataLoaderService.loadData();
  }
}

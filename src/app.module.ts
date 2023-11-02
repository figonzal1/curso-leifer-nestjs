import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DataLoaderService } from './data-loader/data-loader.service';
import { SucursalModule } from './sucursal/sucursal.module';
import { EjecutivoModule } from './ejecutivo/ejecutivo.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:example@localhost:27017/nest?authSource=admin',
    ),
    SucursalModule,
    EjecutivoModule,
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

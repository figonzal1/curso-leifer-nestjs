import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExecutivesModule } from './executives/executives.module';
import { SucursalesModule } from './sucursales/sucursales.module';

@Module({
  imports: [ExecutivesModule, SucursalesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

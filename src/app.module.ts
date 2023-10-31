import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExecutivesModule } from './executives/executives.module';

@Module({
  imports: [ExecutivesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

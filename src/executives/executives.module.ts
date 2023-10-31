import { Module } from '@nestjs/common';
import { ExecutivesService } from './executives.service';
import { ExecutivesController } from './executives.controller';

@Module({
  controllers: [ExecutivesController],
  providers: [ExecutivesService],
})
export class ExecutivesModule {}

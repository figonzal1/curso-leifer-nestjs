import { Test, TestingModule } from '@nestjs/testing';
import { ExecutivesController } from './executives.controller';
import { ExecutivesService } from './executives.service';

describe('ExecutivesController', () => {
  let controller: ExecutivesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExecutivesController],
      providers: [ExecutivesService],
    }).compile();

    controller = module.get<ExecutivesController>(ExecutivesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

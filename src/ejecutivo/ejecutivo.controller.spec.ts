import { Test, TestingModule } from '@nestjs/testing';
import { EjecutivoController } from './ejecutivo.controller';
import { EjecutivoService } from './ejecutivo.service';

describe('EjecutivoController', () => {
  let controller: EjecutivoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EjecutivoController],
      providers: [EjecutivoService],
    }).compile();

    controller = module.get<EjecutivoController>(EjecutivoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { EjecutivosController } from './ejecutivos.controller';
import { EjecutivosService } from './ejecutivos.service';

describe('EjecutivosController', () => {
  let controller: EjecutivosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EjecutivosController],
      providers: [EjecutivosService],
    }).compile();

    controller = module.get<EjecutivosController>(EjecutivosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

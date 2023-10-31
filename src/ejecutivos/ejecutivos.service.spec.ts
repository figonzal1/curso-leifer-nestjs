import { Test, TestingModule } from '@nestjs/testing';
import { EjecutivosService } from './ejecutivos.service';

describe('EjecutivosService', () => {
  let service: EjecutivosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EjecutivosService],
    }).compile();

    service = module.get<EjecutivosService>(EjecutivosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

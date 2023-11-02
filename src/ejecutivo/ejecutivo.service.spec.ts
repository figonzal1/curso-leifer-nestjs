import { Test, TestingModule } from '@nestjs/testing';
import { EjecutivoService } from './ejecutivo.service';

describe('EjecutivoService', () => {
  let service: EjecutivoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EjecutivoService],
    }).compile();

    service = module.get<EjecutivoService>(EjecutivoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EjecutivoService } from './ejecutivo.service';
import { CreateEjecutivoDto } from './dto/create-ejecutivo.dto';

@Controller('ejecutivo')
export class EjecutivoController {
  constructor(private readonly ejecutivoService: EjecutivoService) {}

  @Post()
  create(@Body() createEjecutivoDto: CreateEjecutivoDto) {
    return this.ejecutivoService.create(createEjecutivoDto);
  }

  @Get()
  findAll() {
    return this.ejecutivoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ejecutivoService.findOne(id);
  }
}

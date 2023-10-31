import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EjecutivosService } from './ejecutivos.service';
import { CreateEjecutivoDto } from './dto/create-ejecutivo.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ejecutivos')
@Controller('ejecutivos')
export class EjecutivosController {
  constructor(private readonly ejecutivosService: EjecutivosService) {}

  @Post()
  create(@Body() createEjecutivoDto: CreateEjecutivoDto) {
    return this.ejecutivosService.create(createEjecutivoDto);
  }

  @Get()
  findAll() {
    return this.ejecutivosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ejecutivosService.findOne(+id);
  }
}

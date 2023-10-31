import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ExecutivesService } from './executives.service';
import { CreateExecutiveDto } from './dto/create-executive.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('executives')
@Controller('executives')
export class ExecutivesController {
  constructor(private readonly executivesService: ExecutivesService) {}

  @Post()
  create(@Body() createExecutiveDto: CreateExecutiveDto) {
    return this.executivesService.create(createExecutiveDto);
  }

  @Get()
  findAll() {
    return this.executivesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.executivesService.findOne(+id);
  }
}

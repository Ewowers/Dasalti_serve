import { Body, Controller, Get, Header, Param, Post } from '@nestjs/common';
import { CreateDirectory } from './directory.model';
import { DirectoryService } from './directory.service';

@Controller('api/directory')
export class DirectoryController {
  constructor(private service: DirectoryService) {}
  @Get('/:category')
  hello(@Param('category') category: string) {
    return this.service.findAll(category);
  }
  @Post('create/:id')
  async create(@Body() body: CreateDirectory, @Param('id') id: string) {
    console.log(id);

    return this.service.create(body);
  }
}

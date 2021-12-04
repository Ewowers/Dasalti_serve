import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDirectory, Directory } from './directory.model';

@Injectable()
export class DirectoryService {
  constructor(@InjectModel(Directory) private directory: typeof Directory) {}
  async create(body: CreateDirectory) {
    let directory = await this.directory.create(body);
    return directory;
  }
  async findAll(category: string) {
    const directory = await this.directory.findAll();

    return directory.filter((item) => item.category === category);
  }
}

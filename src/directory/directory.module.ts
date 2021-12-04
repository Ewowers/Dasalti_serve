import { Module } from '@nestjs/common';
import { DirectoryService } from './directory.service';
import { DirectoryController } from './directory.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Directory } from './directory.model';

@Module({
  imports: [SequelizeModule.forFeature([Directory])],
  providers: [DirectoryService],
  controllers: [DirectoryController],
})
export class DirectoryModule {}

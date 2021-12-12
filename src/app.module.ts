import { MessageModule } from './message/message.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DirectoryModule } from './directory/directory.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Directory } from './directory/directory.model';
import { Message } from './message/message.model';
@Module({
  imports: [
    MessageModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1',
      database: 'dasalte',
      models: [Directory, Message],
      autoLoadModels: true,
      logging: false,
    }),
    DirectoryModule,
    MessageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOption } from './typeorm/db';
import { Post } from './typeorm/entities/post';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOption),
    TypeOrmModule.forFeature([Post]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

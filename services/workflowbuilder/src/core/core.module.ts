import { Module } from '@nestjs/common';
import { AppController } from './core.controller';
import { AppService } from './core.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

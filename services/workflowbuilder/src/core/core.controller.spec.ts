import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './core.controller';
import { AppService } from './core.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('App controller', () => {
    it('Health check should return OK"', () => {
      expect(appController.healthCheck()).toBe('OK');
    });
  });
});

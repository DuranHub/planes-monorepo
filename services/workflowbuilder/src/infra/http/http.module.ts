import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { procedureProjectController } from './controllers/procedureProjects.controllers';
import { createProcedureProjectUseCase } from 'src/application/use-cases/createProcedureProject-use-case';
import { deleteProcedureProjectUseCase } from 'src/application/use-cases/deleteProcedureProject-use-case'

@Module({
  imports: [DatabaseModule],
  controllers: [procedureProjectController],
  providers: [createProcedureProjectUseCase, deleteProcedureProjectUseCase],
})
export class HttpModule {}

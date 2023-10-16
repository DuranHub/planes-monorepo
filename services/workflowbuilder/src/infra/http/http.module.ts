import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { procedureProjectController } from './controllers/procedureProjects.controllers';
import { createProcedureProjectUseCase } from 'src/application/use-cases/createProcedureProject-use-case';
import { prismaProcedureProjectRepository } from '../database/prisma/repositories/prisma-procedureProject-repository';
import { PrismaService } from '../database/prisima.service';
import { updateProcedureProjectUseCase } from 'src/application/use-cases/updateProcedureProject-use-case';
import { findAllProcedureProjectUseCase } from 'src/application/use-cases/findAll-ProcedureProject-use-case';
import { findByFieldProcedureProjecUseCase } from 'src/application/use-cases/findByField-ProcedureProject-use-case';
import { deleteProcedureProjectUseCase } from 'src/application/use-cases/deleteProcedureProject-use-case'

@Module({
  imports: [DatabaseModule],
  controllers: [procedureProjectController],
  providers: [
    createProcedureProjectUseCase,
    updateProcedureProjectUseCase,
    findAllProcedureProjectUseCase,
    findByFieldProcedureProjecUseCase,
    prismaProcedureProjectRepository,
    PrismaService,
  ],
})
export class HttpModule {}

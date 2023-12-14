import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { procedureProjectController } from './controllers/procedureProjects.controllers';
import { prismaProcedureProjectRepository } from '../database/prisma/repositories/prisma-procedureProject-repository';
import { PrismaService } from '../database/prisima.service';
import { updateProcedureProjectUseCase } from 'src/application/use-cases/procedureProject/updateProcedureProject-use-case';
import { findAllProcedureProjectUseCase } from 'src/application/use-cases/procedureProject/findAll-ProcedureProject-use-case';
import { findByFieldProcedureProjecUseCase } from 'src/application/use-cases/procedureProject/findByField-ProcedureProject-use-case';
import { deleteProcedureProjectUseCase } from 'src/application/use-cases/procedureProject/deleteProcedureProject-use-case';
import { createProcedureProjectUseCase } from 'src/application/use-cases/procedureProject/createProcedureProject-use-case';
import { createProcedureUseCase } from 'src/application/use-cases/procedure/create-procedure-use-case';
import { prismaProcedureRepository } from '../database/prisma/repositories/prisma-procedure-repository';
import { procedureController } from './controllers/procedure.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [procedureController, procedureProjectController],
  providers: [
    createProcedureUseCase,
    prismaProcedureRepository,
    createProcedureProjectUseCase,
    updateProcedureProjectUseCase,
    findAllProcedureProjectUseCase,
    findByFieldProcedureProjecUseCase,
    deleteProcedureProjectUseCase,
    prismaProcedureProjectRepository,
    PrismaService,
  ],
})
export class HttpModule {}

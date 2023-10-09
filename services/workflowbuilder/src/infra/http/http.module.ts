import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { procedureProjectController } from './controllers/procedureProjects.controllers';
import { createProcedureProjectUseCase } from 'src/application/use-cases/createProcedureProject-use-case';
import { prismaProcedureProjectRepository } from '../database/prisma/repositories/prisma-procedureProject-repository';
import { PrismaService } from '../database/prisima.service';

@Module({
  imports: [DatabaseModule],
  controllers: [procedureProjectController],
  providers: [createProcedureProjectUseCase,prismaProcedureProjectRepository,PrismaService],
})
export class HttpModule {}

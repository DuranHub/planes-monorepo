import { Module } from '@nestjs/common';
import { PrismaService } from './prisima.service';
import { procedureProjectRepository } from 'src/application/repositories/procedure-project-repository';
import { prismaProcedureProjectRepository } from './prisma/repositories/prisma-procedureProject-repository';
import { prismaProcedureRepository } from './prisma/repositories/prisma-procedure-repository';
import { procedureRepository } from 'src/application/repositories/procedure-repository';

@Module({
  imports: [],
  controllers: [],
  providers: [
    PrismaService,
    {
      provide: procedureProjectRepository,
      useClass: prismaProcedureProjectRepository,
    },
    {
      provide: procedureRepository,
      useClass: prismaProcedureRepository,
    },
  ],
  exports: [
    {
      provide: procedureProjectRepository,
      useClass: prismaProcedureProjectRepository,
    },
    {
      provide: procedureRepository,
      useClass: prismaProcedureRepository,
    },
  ],
})
export class DatabaseModule {}

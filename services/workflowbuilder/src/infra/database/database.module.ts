import { Module } from '@nestjs/common';
import { PrismaService } from './prisima.service';
import { procedureProjectRepository } from 'src/application/repositories/procedure-project-repository';
import { prismaProcedureProjectRepository } from './prisma/repositories/prisma-procedureProject-repository';

@Module({
  imports: [],
  controllers: [],
  providers: [
    PrismaService,
    {
      provide: procedureProjectRepository,
      useClass: prismaProcedureProjectRepository,
    },
  ],
  exports: [
    {
      provide: procedureProjectRepository,
      useClass: prismaProcedureProjectRepository,
    },
  ],
})
export class DatabaseModule {}

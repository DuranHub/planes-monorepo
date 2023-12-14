import { Injectable } from '@nestjs/common';
import { procedureRepository } from 'src/application/repositories/procedure-repository';
import { PrismaService } from '../../prisima.service';
import { procedure } from 'src/application/entities/procedure';
import { prismaProcedureMapper } from '../mappers/prisma-procedure-mapper';

@Injectable()
export class prismaProcedureRepository implements procedureRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(procedure: procedure): Promise<void> {
    const procedurePrismaData = prismaProcedureMapper.toPrisma(procedure);
    await this.prismaService.procedure.create({ data: procedurePrismaData });
  }
}

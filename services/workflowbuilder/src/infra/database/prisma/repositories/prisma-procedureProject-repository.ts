import { Injectable } from '@nestjs/common';
import { prismaProcedureProjectMapper } from 'src/infra/database/prisma/mappers/prisma-procedureProject-mapper';
import { ProcedureProject } from 'src/application/entities/procedureProject';
import { procedureProjectRepository } from 'src/application/repositories/procedure-project-repository';
import { PrismaService } from '../../prisima.service';

@Injectable()
export class prismaProcedureProjectRepository
  implements procedureProjectRepository
{
  constructor(private readonly prismaService: PrismaService) {}
  async create(procedureProject: ProcedureProject): Promise<void> {
    const procedureProjectPrismaData =
      prismaProcedureProjectMapper.toPrisma(procedureProject);

    await this.prismaService.procedureProject.create({
      data: procedureProjectPrismaData,
    });
  }
  async delete(id: string): Promise<void> {
    try {
      console.log('Prisma repository - ID a eliminar: ', id);

      const existingRecord =
        await this.prismaService.procedureProject.findUnique({
          where: {
            id,
          },
        });

      if (!existingRecord) {
        throw new Error('Registro no encontrado o ya eliminado');
      }

      if (existingRecord.deletedAt) {
        throw new Error('Registro ya ha sido eliminado');
      }

      await this.prismaService.procedureProject.update({
        where: {
          id,
        },
        data: {
          deletedAt: new Date().toISOString(),
        },
      });
    } catch (error) {
      throw new Error('Prisma repository - Error al actualizar')
    }
  }
}

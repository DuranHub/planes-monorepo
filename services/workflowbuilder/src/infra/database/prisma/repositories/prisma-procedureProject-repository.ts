import { Injectable } from '@nestjs/common';
import { prismaProcedureProjectMapper } from 'src/infra/database/prisma/mappers/prisma-procedureProject-mapper';
import { ProcedureProject } from 'src/application/entities/procedureProject';
import { procedureProjectRepository } from 'src/application/repositories/procedure-project-repository';
import { PrismaService } from '../../prisima.service';
import { updateProcedureProjectDto } from 'src/infra/http/dtos/updateProcedureProjectDto';

function validateField(
  value: string,
  minLength: number,
  maxLength: number,
  fieldName: string,
) {
  if (value.length < minLength || value.length > maxLength) {
    throw new Error(
      `The ${fieldName} must be between ${minLength} and ${maxLength} characters long`,
    );
  }
  if (value.trim() === '') {
    throw new Error(`The ${fieldName} must not be empty`);
  }
}

@Injectable()
export class prismaProcedureProjectRepository
  implements procedureProjectRepository
{
  constructor(private readonly prismaService: PrismaService) {}

  async create(procedureProject: ProcedureProject): Promise<void> {
    const procedureProjectPrismaData =
      prismaProcedureProjectMapper.toPrisma(procedureProject);

    const { name, description } = procedureProjectPrismaData;

    validateField(name, 3, 25, 'name');
    validateField(description, 3, 280, 'description');

    await this.prismaService.procedureProject.create({
      data: procedureProjectPrismaData,
    });
  }
  async findByField(
    field: 'name' | 'machineName' | 'id',
    value: string,
  ): Promise<ProcedureProject[]> {
    const procedureProjectPrismaData =
      await this.prismaService.procedureProject.findMany({
        where: {
          [field]: {
            contains: value,
          },
        },
      });
    if (!procedureProjectPrismaData) {
      throw new Error('Procedure Project not found');
    }
    const procedureProject = procedureProjectPrismaData.map(
      prismaProcedureProjectMapper.toDomain,
    );
    return procedureProject;
  }

  async findAll(): Promise<ProcedureProject[]> {
    const procedureProjectPrismaData =
      await this.prismaService.procedureProject.findMany();
    if (!procedureProjectPrismaData) {
      throw new Error('Procedure Project not found');
    }
    const procedureProject = procedureProjectPrismaData.map(
      prismaProcedureProjectMapper.toDomain,
    );

    return procedureProject;
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
      throw new Error('Prisma repository - Error al actualizar');
    }
  }

  async update(
    machineName: string,
    data: updateProcedureProjectDto,
  ): Promise<ProcedureProject> {
    const ProcedureProjectPrismaData =
      await this.prismaService.procedureProject.update({
        where: {
          machineName: machineName,
        },
        data,
      });

    const { name, description } = data;

    validateField(name, 3, 25, 'name');
    validateField(description, 3, 280, 'description');

    const procedureProject = prismaProcedureProjectMapper.toDomain(
      ProcedureProjectPrismaData,
    );
    return procedureProject;
  }
}

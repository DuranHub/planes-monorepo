import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { createProcedureProjectUseCase } from 'src/application/use-cases/createProcedureProject-use-case';
import { createProcedureProjectDto } from '../dtos/createProcedureProjectDto';
import { procedureProjectMapper } from '../mappers/proccedureProject-mapper';
import { ApiResponse } from '@nestjs/swagger';
import { ProcedureProject } from 'src/application/entities/procedureProject';
import { PrismaClient } from '@prisma/client';
import { prismaProcedureProjectRepository } from 'src/infra/database/prisma/repositories/prisma-procedureProject-repository';

@Controller()
export class procedureProjectController {
  constructor(
    private CreateProcedureProjectUseCase: createProcedureProjectUseCase,
    private prismaProcedureProjectRepository: prismaProcedureProjectRepository,
  ) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The WorkFlowBuilder has been successfully created.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  async create(@Body() body: createProcedureProjectDto) {
    const { name, machineName, description } = body;
    const { procedureProject } =
      await this.CreateProcedureProjectUseCase.execute({
        name,
        machineName,
        description,
      });
    return { procedureProject: procedureProjectMapper.toDto(procedureProject) };
  }

  @Get('search/:field/:value')
  @ApiResponse({
    status: 200,
    description:
      'All the "ProcedureProject" records with matching fields were found successfully.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  async findByField(
    @Param('field') field: string,
    @Param('value') value: string,
  ): Promise<ProcedureProject[] | null> {
    const procedureProject  = await this.prismaProcedureProjectRepository.findByField(field,value)
    return procedureProject
  } 

  @Get()
  @ApiResponse({
    status: 200,
    description: 'All the "ProcedureProject" had been found',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  async findAll(): Promise<ProcedureProject[] | null> {
    const procedureProjects =
      await this.prismaProcedureProjectRepository.findAll();
    if (!procedureProjects) {
      console.log('No "ProcedureProject" were found');
    }
    return procedureProjects;
  }
}

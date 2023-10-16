import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  InternalServerErrorException,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { deleteProcedureProjectUseCase } from 'src/application/use-cases/deleteProcedureProject-use-case';
import { createProcedureProjectUseCase } from 'src/application/use-cases/createProcedureProject-use-case';
import { createProcedureProjectDto } from '../dtos/createProcedureProjectDto';
import { procedureProjectMapper } from '../mappers/proccedureProject-mapper';
import { ApiResponse } from '@nestjs/swagger';
import { ProcedureProject } from 'src/application/entities/procedureProject';
import { PrismaClient } from '@prisma/client';
import { prismaProcedureProjectRepository } from 'src/infra/database/prisma/repositories/prisma-procedureProject-repository';
import { deleteProcedureProjectDto } from '../dtos/deleteProcedureProjectDto';

const RESPONSES = {
  CREATED: 201,
  SUCCESS: 204,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

@Controller()
export class procedureProjectController {
  constructor(
    private CreateProcedureProjectUseCase: createProcedureProjectUseCase,
    private prismaProcedureProjectRepository: prismaProcedureProjectRepository,
    private DeleteProcedureProjectUseCase: deleteProcedureProjectUseCase,
  ) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The WorkFlowBuilder has been successfully created.',
  })
  @ApiResponse({
    status: RESPONSES.CREATED,
    description: 'The WorkFlowBuilder has been successfully created.',
  })
  @ApiResponse({
    status: RESPONSES.INTERNAL_SERVER_ERROR,
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
  @Delete()
  @ApiResponse({
    status: RESPONSES.SUCCESS,
    description: 'Procedure Project deleted successfully.',
  })
  @ApiResponse({
    status: RESPONSES.NOT_FOUND,
    description: 'Procedure Project not found.',
  })
  @ApiResponse({
    status: RESPONSES.INTERNAL_SERVER_ERROR,
    description: 'Internal server error.',
  })
  async delete(@Body() deleteProcedureProjectDto: deleteProcedureProjectDto) {
    const { id } = deleteProcedureProjectDto;
    const response = await this.DeleteProcedureProjectUseCase.execute({ id });

    if (!response.success) {
      if (response.message !== 'Procedure Project not found') {
        throw new InternalServerErrorException('Internal server error');
      }

      throw new NotFoundException('Procedure Project not found');
    }

    return;
  }
}

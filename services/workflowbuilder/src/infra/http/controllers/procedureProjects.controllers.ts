import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Put,
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
import { prismaProcedureProjectRepository } from 'src/infra/database/prisma/repositories/prisma-procedureProject-repository';
import { updateProcedureProjectDto } from '../dtos/updateProcedureProjectDto';
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
    private PrismaProcedureProjectRepository: prismaProcedureProjectRepository,
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
    status: 400,
    description: 'ProcedureProjec Not Found',
  })
  async findByField(
    @Param('field') field: 'id' | 'machineName' | 'name',
    @Param('value') value: string,
  ): Promise<ProcedureProject[] | null> {
    const procedureProject =
      await this.PrismaProcedureProjectRepository.findByField(field, value);
    if (!procedureProject) {
      throw new HttpException('Server Error', HttpStatus.NOT_FOUND);
    }
    return procedureProject;
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
      await this.PrismaProcedureProjectRepository.findAll();
    if (!procedureProjects) {
      throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return procedureProjects;
  }

  @Put(':machineName')
  @ApiResponse({
    status: 200,
    description: 'The "ProcedureProject" has been successfully updated',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  @ApiResponse({
    status: 404,
    description: 'ProcedureProject not found',
  })
  async update(
    @Param('machineName') machineName: string,
    @Body() updateData: updateProcedureProjectDto,
  ): Promise<ProcedureProject> {
    const procedureProject =
      await this.PrismaProcedureProjectRepository.findByField(
        'machineName',
        machineName,
      );

    if (!procedureProject) {
      throw new HttpException(
        'ProcedureProject Not Found',
        HttpStatus.NOT_FOUND,
      );
    }
    const procedureProjectUpdate =
      await this.PrismaProcedureProjectRepository.update(
        machineName,
        updateData,
      );
    return procedureProjectUpdate;
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

import {
  Body,
  Controller,
  Delete,
  InternalServerErrorException,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { deleteProcedureProjectUseCase } from 'src/application/use-cases/deleteProcedureProject-use-case';
import { createProcedureProjectUseCase } from 'src/application/use-cases/createProcedureProject-use-case';
import { createProcedureProjectDto } from '../dtos/createProcedureProjectDto';
import { procedureProjectMapper } from '../mappers/proccedureProject-mapper';
import { ApiResponse } from '@nestjs/swagger';
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
    private DeleteProcedureProjectUseCase: deleteProcedureProjectUseCase,
  ) {}

  @Post()
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

import {
  Body,
  Controller,
  Delete,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { deleteProcedureProjectUseCase } from 'src/application/use-cases/deleteProcedureProject-use-case';
import { createProcedureProjectUseCase } from 'src/application/use-cases/createProcedureProject-use-case';
import { createProcedureProjectDto } from '../dtos/createProcedureProjectDto';
import { procedureProjectMapper } from '../mappers/proccedureProject-mapper';
import { ApiResponse } from '@nestjs/swagger';

const RESPONSES = {
  SUCCESS: 204,
};

@Controller()
export class procedureProjectController {
  constructor(
    private CreateProcedureProjectUseCase: createProcedureProjectUseCase,
    private DeleteProcedureProjectUseCase: deleteProcedureProjectUseCase,
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

  @Delete(':id')
  @ApiResponse({
    status: RESPONSES.SUCCESS,
    description: 'Procedure Project deleted successfully.',
  })
  @ApiResponse({
    status: 404,
    description: 'Procedure Project not found.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  async delete(@Param('id') id: string) {
    const response = await this.DeleteProcedureProjectUseCase.execute({
      id,
    });

    console.log('Controller: ', response);
    if (!response.success) {
      if (response.message !== 'Procedure Project not found') {
        throw new InternalServerErrorException('Internal server error');
      }

      throw new NotFoundException('Procedure Project not found');
    }

    return;
  }
}

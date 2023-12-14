import { createProcedureUseCase } from 'src/application/use-cases/procedure/create-procedure-use-case';
import { createProcedureDto } from '../dtos/createProcedureDto';
import { Body, Controller, Post } from '@nestjs/common';
import { procedureMapper } from '../mappers/procedure-Mapper';
import {
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
} from '@nestjs/swagger';
import { procedureDto } from '../dtos/procedureDto';

@Controller({ path: 'Procedure' })
@ApiTags('Procedure')
export class procedureController {
  constructor(private createProcedureUseCase: createProcedureUseCase) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The procedure has been successfully created.',
    type: procedureDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error.',
  })
  async create(@Body() body: createProcedureDto) {
    const { node, arrow, completedRequirements } = body;
    const { Procedure } = await this.createProcedureUseCase.execute({
      node,
      arrow,
      completedRequirements,
    });
    return { Procedure: procedureMapper.toDto(Procedure) };
  }
}

import { procedure } from 'src/application/entities/procedure';
import { UseCase } from '../use-case';
import { procedureRepository } from 'src/application/repositories/procedure-repository';
import { Injectable } from '@nestjs/common';
import { JsonObject } from '@prisma/client/runtime/library';

interface createProcedureRequest {
  completedRequirements: JsonObject;
  node: JsonObject;
  arrow: JsonObject;
}
interface createProceureResponse {
  Procedure: procedure;
}

@Injectable()
export class createProcedureUseCase
  implements UseCase<createProcedureRequest, createProceureResponse>
{
  constructor(private readonly Procedurerepository: procedureRepository) {}
  async execute(
    request: createProcedureRequest,
  ): Promise<createProceureResponse> {
    const { completedRequirements, node, arrow } = request;
    const Procedure = new procedure({ completedRequirements, node, arrow });
    await this.Procedurerepository.create(Procedure);
    return { Procedure };
  }
}

import { Injectable } from '@nestjs/common';
import { ProcedureProject } from '../entities/procedureProject';
import { procedureProjectRepository } from '../repositories/procedure-project-repository';
import { UseCase } from './use-case';
import { updateProcedureProjectDto } from 'src/infra/http/dtos/updateProcedureProjectDto';

interface updateProcedureProjectRequest {
  machineName: string;
  data: updateProcedureProjectDto;
}

interface updateProcedureProjectResponse {
  procedureProject: ProcedureProject;
}

@Injectable()
export class updateProcedureProjectUseCase
  implements
    UseCase<updateProcedureProjectRequest, updateProcedureProjectResponse>
{
  constructor(
    private readonly ProcedureProjectRepository: procedureProjectRepository,
  ) {}
  async execute(
    request: updateProcedureProjectRequest,
  ): Promise<updateProcedureProjectResponse> {
    const { machineName, data } = request;

    const procedureProject = await this.ProcedureProjectRepository.update(
      machineName,
      data,
    );
    return { procedureProject };
  }
}

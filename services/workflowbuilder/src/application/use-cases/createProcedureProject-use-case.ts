import { Injectable } from '@nestjs/common';
import { ProcedureProject } from '../entities/procedureProject';
import { UseCase } from './use-case';
import { procedureProjectRepository } from '../repositories/procedure-project-repository';

interface createProcedureProjectRequest {
  name: string;
  machineName: string;
  description: string;
}
interface createProcedureProjectResponse {
  procedureProject: ProcedureProject;
}

@Injectable()
export class createProcedureProjectUseCase
  implements
    UseCase<createProcedureProjectRequest, createProcedureProjectResponse>
{
  constructor(
    private readonly ProcedureProjectRepository: procedureProjectRepository,
  ) {}
  async execute(
    request: createProcedureProjectRequest,
  ): Promise<createProcedureProjectResponse> {
    const { name, machineName, description } = request;

    const procedureProject = new ProcedureProject({
      name,
      description,
      machineName,
    });
    await this.ProcedureProjectRepository.create(procedureProject);
    return { procedureProject };
  }
}

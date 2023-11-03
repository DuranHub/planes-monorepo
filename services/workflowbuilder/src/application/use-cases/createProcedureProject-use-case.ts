import { Injectable } from '@nestjs/common';
import { ProcedureProject } from '../entities/procedureProject';
import { UseCase } from './use-case';
import { procedureProjectRepository } from '../repositories/procedure-project-repository';

export interface createProcedureProjectRequest {
  name: string;
  machineName: string;
  description: string;
}
export interface createProcedureProjectResponse {
  procedureProject: ProcedureProject;
}

@Injectable()
export class createProcedureProjectUseCase
  implements
    UseCase<createProcedureProjectRequest, createProcedureProjectResponse>
{
  constructor(
    private readonly procedureProjectRepository: procedureProjectRepository,
  ) {}
  async execute(
    request: createProcedureProjectRequest,
  ): Promise<createProcedureProjectResponse> {
    const { name, machineName, description } = request;
    console.log('from use-case', machineName);

    const procedureProject = new ProcedureProject({
      name,
      description,
      machineName,
    });
    await this.procedureProjectRepository.create(procedureProject);
    return { procedureProject };
  }
}

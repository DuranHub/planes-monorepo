import { ProcedureProject } from 'src/application/entities/procedureProject';
import { procedureProjectRepository } from 'src/application/repositories/procedure-project-repository';
import { UseCase } from '../use-case';

interface findByFieldRequest {
  field: 'name' | 'machineName' | 'id';
  value: string;
}

interface findByFieldResponse {
  procedureProject: ProcedureProject[];
}

export class findByFieldProcedureProjecUseCase
  implements UseCase<findByFieldRequest, findByFieldResponse>
{
  constructor(
    private readonly procedureProjectRepository: procedureProjectRepository,
  ) {}
  async execute(request: findByFieldRequest): Promise<findByFieldResponse> {
    const { field, value } = request;

    const procedureProject = await this.procedureProjectRepository.findByField(
      field,
      value,
    );
    return { procedureProject };
  }
}

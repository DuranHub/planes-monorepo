import { ProcedureProject } from 'src/application/entities/procedureProject';
import { procedureProjectRepository } from 'src/application/repositories/procedure-project-repository';
import { UseCase } from '../use-case';

interface FindAllResponse {
  procedureProject: ProcedureProject[];
}
interface FindAllRequest {}

export class findAllProcedureProjectUseCase
  implements UseCase<FindAllRequest, FindAllResponse>
{
  constructor(
    private readonly procedureProjectRepository: procedureProjectRepository,
  ) {}

  async execute(): Promise<FindAllResponse> {
    const procedureProject = await this.procedureProjectRepository.findAll();
    return { procedureProject };
  }
}

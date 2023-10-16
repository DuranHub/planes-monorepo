import { ProcedureProject } from '../entities/procedureProject';
import { updateProcedureProjectDto } from 'src/infra/http/dtos/updateProcedureProjectDto';
type searcheableFiled = 'name' | 'machineName' | 'id';
export abstract class procedureProjectRepository {
  abstract create(procedureProject: ProcedureProject): Promise<void>;
  abstract update(
    machineName: string,
    data: updateProcedureProjectDto,
  ): Promise<ProcedureProject>;
  abstract findByField(
    field: searcheableFiled,
    value: string,
  ): Promise<ProcedureProject[]>;
  abstract findAll(): Promise<ProcedureProject[]>;
}

export abstract class procedureProjectRepository {
  abstract create(procedureProject: ProcedureProject): Promise<void>;
  abstract delete(id: string): Promise<void>;
}

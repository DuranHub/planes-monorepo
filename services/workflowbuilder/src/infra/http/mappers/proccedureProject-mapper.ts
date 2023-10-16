import { ProcedureProject } from 'src/application/entities/procedureProject';
import { procedureProjectDto } from '../dtos/procedureProjectDto';
export class procedureProjectMapper {
  constructor() {}

  public static toDto(procedureProject: ProcedureProject): procedureProjectDto {
    return {
      id: procedureProject.id,
      name: procedureProject.name,
      description: procedureProject.description,
      machineName: procedureProject.machineName,
      createdAt: procedureProject.createdAt || undefined,
      updatedAt: procedureProject.updateAt || undefined,
      deletedAt: procedureProject.deletedAt || undefined,
    };
  }
}

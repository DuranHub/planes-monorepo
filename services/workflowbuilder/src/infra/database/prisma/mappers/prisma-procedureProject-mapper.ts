import { ProcedureProject } from 'src/application/entities/procedureProject';
import { procedureProject as PrismaProcedureProject } from '@prisma/client';

export class prismaProcedureProjectMapper {
  public static toPrisma(
    procedureProject: ProcedureProject,
  ){
    return {
      id: procedureProject.id,
      name: procedureProject.name,
      machineName: procedureProject.machineName,
      description: procedureProject.description,
      createdAt: procedureProject.createdAt ||  undefined,
      updatedAt: procedureProject.updateAt || undefined,
    };
  }
  public static toDomain(procedureProjectData: PrismaProcedureProject) {
    return new ProcedureProject(
      {
        name: procedureProjectData.name,
        machineName: procedureProjectData.machineName,
        description: procedureProjectData.description,
        createdAt: procedureProjectData.createdAt,
        updatedAt: procedureProjectData.updatedAt,
      },
      procedureProjectData.id,
    );
  }
}

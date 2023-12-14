import { procedure } from 'src/application/entities/procedure';
import { procedure as PrismaProcedure } from '@prisma/client';
import { JsonObject } from '@prisma/client/runtime/library';

export class prismaProcedureMapper {
  public static toPrisma(procedure: procedure) {
    return {
      node: procedure.node as JsonObject,
      arrow: procedure.arrow as JsonObject,
      completedRequirements: procedure.completedRequirements as JsonObject,
    };
  }
  public static toDomain(procedureData: PrismaProcedure) {
    return new procedure({
      node: procedureData.node as JsonObject,
      arrow: procedureData.arrow as JsonObject,
      completedRequirements: procedureData.completedRequirements as JsonObject,
    });
  }
}

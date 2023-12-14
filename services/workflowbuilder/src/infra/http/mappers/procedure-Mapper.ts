import { procedure } from 'src/application/entities/procedure';
import { procedureDto } from '../dtos/procedureDto';

export class procedureMapper {
  constructor() {}

  public static toDto(procedure: procedure): procedureDto {
    return {
      node: procedure.node,
      arrow: procedure.arrow,
      completedRequirements: procedure.completedRequirements,
    };
  }
}

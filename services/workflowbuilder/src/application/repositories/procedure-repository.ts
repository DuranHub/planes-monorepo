import { procedure } from '../entities/procedure';
export abstract class procedureRepository {
  abstract create(procedure: procedure): Promise<void>;
}

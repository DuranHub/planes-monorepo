import { ProcedureProject } from "../entities/procedureProject";

export abstract class procedureProjectRepository {
    abstract create (procedureProject: ProcedureProject): Promise<void>
}
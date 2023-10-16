// We import the necessary dependencies, including Injectable to mark the class as a NestJS service.
import { Injectable } from '@nestjs/common';
import { UseCase } from './use-case';
import { procedureProjectRepository } from '../repositories/procedure-project-repository';

// We define a deleteProcedureProjectRequest interface that describes the form of the request, 
// which includes an idOrMachineName field of type string.
export interface deleteProcedureProjectRequest {
  id: string;
}

// We define a deleteProcedureProjectResponse interface that describes the form of the response, 
// which includes a success field of type boolean and an optional message field of type string.
export interface deleteProcedureProjectResponse {
  success: boolean;
  message?: string;
}

@Injectable()
export class deleteProcedureProjectUseCase
  implements
    UseCase<deleteProcedureProjectRequest, deleteProcedureProjectResponse>
{
  constructor(
    private readonly procedureProjectRepository: procedureProjectRepository,
  ) {}

  async execute(
    request: deleteProcedureProjectRequest,
  ): Promise<deleteProcedureProjectResponse> {
    const { id } = request;
    console.log('Use case: ', id);

    try {
      await this.procedureProjectRepository.delete(id);

      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: 'Error: Deleting ProcedureProject',
      };
    }
  }
}

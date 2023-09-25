import { Body, Controller, Post } from '@nestjs/common';
import {createProcedureProjectUseCase} from 'src/application/use-cases/createProcedureProject-use-case'
import { createProcedureProjectDto } from '../dtos/createProcedureProjectDto';
import { procedureProjectMapper } from '../mappers/proccedureProject-mapper';

@Controller()
export class procedureProjectController{
    constructor(
        private CreateProcedureProjectUseCase: createProcedureProjectUseCase
    ){}

    @Post()
    async create(@Body() body: createProcedureProjectDto){
        const { name, machineName, description} = body;
        console.log(machineName);
        
        const {procedureProject} = await this.CreateProcedureProjectUseCase.execute({
            name,
            machineName,
            description
        });
    return {procedureProject: procedureProjectMapper.toDto(procedureProject)}
    }
}
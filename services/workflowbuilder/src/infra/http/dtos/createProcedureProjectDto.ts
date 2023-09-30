import { ApiProperty } from "@nestjs/swagger";

export class createProcedureProjectDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    machineName: string;
    @ApiProperty()
    description: string;
}
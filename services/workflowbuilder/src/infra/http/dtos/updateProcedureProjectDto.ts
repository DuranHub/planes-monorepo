import { ApiProperty } from '@nestjs/swagger';

export class updateProcedureProjectDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  machineName: string;
  @ApiProperty()
  description: string;
}

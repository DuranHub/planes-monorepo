import { ApiProperty } from '@nestjs/swagger';

export class procedureProjectDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  machineName: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  createdAt?: Date;
  @ApiProperty()
  updatedAt?: Date;
}

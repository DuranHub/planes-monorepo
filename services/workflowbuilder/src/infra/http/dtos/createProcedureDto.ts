import { ApiProperty } from '@nestjs/swagger';
import { JsonObject } from '@prisma/client/runtime/library';

export class createProcedureDto {
  @ApiProperty()
  node: JsonObject;
  @ApiProperty()
  arrow: JsonObject;
  @ApiProperty()
  completedRequirements: JsonObject;
}

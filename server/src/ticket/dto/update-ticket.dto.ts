import { ApiProperty } from '@nestjs/swagger';
import { TicketStatus } from '../ticket-status.enum';

export class UpdateTicketStatusDto {
  @ApiProperty({
    example: TicketStatus.IN_PROGRESS,
    enum: TicketStatus,
  })
  status: TicketStatus;
}

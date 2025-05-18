import { ApiProperty } from '@nestjs/swagger';
import { TicketStatus } from '../ticket-status.enum';

export class FilterTicketsDto {
  @ApiProperty({
    required: false,
    example: TicketStatus.NEW,
    enum: TicketStatus,
  })
  status?: TicketStatus;

  @ApiProperty({ required: false, example: '2024-01-01' })
  from?: string;

  @ApiProperty({ required: false, example: '2025-01-01' })
  to?: string;
}

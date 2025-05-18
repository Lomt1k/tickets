import { ApiProperty } from '@nestjs/swagger';

export class CancelTicketDto {
  @ApiProperty({ example: 'Клиент отозвал заявку' })
  cancellationReason: string;
}

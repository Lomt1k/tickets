import { ApiProperty } from '@nestjs/swagger';

export class ResolveTicketDto {
  @ApiProperty({
    example: 'Поставили в серверную новый сервер. Ну и камеру заодно',
  })
  resolutionText: string;
}

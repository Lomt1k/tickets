import { ApiProperty } from '@nestjs/swagger';

export class CreateTicketDto {
  @ApiProperty({ example: 'Кто-то украл сервер из серверной :/' })
  text: string;
}

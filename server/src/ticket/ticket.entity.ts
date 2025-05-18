import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { TicketStatus } from './ticket-status.enum';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @Column('varchar', { default: TicketStatus.NEW })
  @ApiProperty({ example: TicketStatus.NEW, enum: TicketStatus })
  status: string;

  @Column()
  @ApiProperty({ example: 'Проблема с подключением к серверу' })
  text: string;

  @Column({ nullable: true })
  @ApiProperty({ example: 'Настройки сети были изменены', required: false })
  resolutionText: string;

  @Column({ nullable: true })
  @ApiProperty({ example: 'Клиент отменил запрос', required: false })
  cancellationReason: string;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: Date;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: Date;
}

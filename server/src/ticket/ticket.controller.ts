import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiBody, ApiQuery } from '@nestjs/swagger';
import { TicketService } from './ticket.service';
import { Ticket } from './ticket.entity';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketStatusDto } from './dto/update-ticket.dto';
import { ResolveTicketDto } from './dto/resolve-ticket.dto';
import { CancelTicketDto } from './dto/cancel-ticket.dto';
import { FilterTicketsDto } from './dto/filter-tickets.dto';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  @ApiOperation({ summary: 'Создать новое обращение' })
  @ApiBody({ type: CreateTicketDto })
  @ApiResponse({ status: 201, description: 'Обращение создано', type: Ticket })
  async create(@Body() dto: CreateTicketDto): Promise<Ticket> {
    return this.ticketService.create(dto.text);
  }

  @Get()
  @ApiOperation({
    summary: 'Получить список обращений с фильтром по статусу и диапазону дат',
  })
  @ApiQuery({ name: 'status', required: false, example: 'new' })
  @ApiQuery({ name: 'from', required: false, example: '2024-01-01' })
  @ApiQuery({ name: 'to', required: false, example: '2025-01-01' })
  @ApiResponse({ status: 200, description: 'Список обращений', type: [Ticket] })
  async findAll(@Query() filters: FilterTicketsDto): Promise<Ticket[]> {
    return this.ticketService.findAll(filters.status, filters.from, filters.to);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить одно обращение по ID' })
  @ApiResponse({ status: 200, description: 'Обращение найдено', type: Ticket })
  @ApiResponse({ status: 404, description: 'Обращение не найдено' })
  async findOne(@Param('id') id: number): Promise<Ticket> {
    return this.ticketService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновить статус обращения' })
  @ApiBody({ type: UpdateTicketStatusDto })
  @ApiResponse({ status: 200, description: 'Статус обновлен', type: Ticket })
  async updateStatus(
    @Param('id') id: number,
    @Body() dto: UpdateTicketStatusDto,
  ): Promise<Ticket> {
    return this.ticketService.updateStatus(id, dto.status);
  }

  @Patch(':id/resolve')
  @ApiOperation({ summary: 'Завершить обращение' })
  @ApiBody({ type: ResolveTicketDto })
  @ApiResponse({
    status: 200,
    description: 'Обращение завершено',
    type: Ticket,
  })
  async resolve(
    @Param('id') id: number,
    @Body() dto: ResolveTicketDto,
  ): Promise<Ticket> {
    return this.ticketService.resolve(id, dto.resolutionText);
  }

  @Patch(':id/cancel')
  @ApiOperation({ summary: 'Отменить обращение' })
  @ApiBody({ type: CancelTicketDto })
  @ApiResponse({ status: 200, description: 'Обращение отменено', type: Ticket })
  async cancel(
    @Param('id') id: number,
    @Body() dto: CancelTicketDto,
  ): Promise<Ticket> {
    return this.ticketService.cancel(id, dto.cancellationReason);
  }
}

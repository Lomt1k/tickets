import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './ticket.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private ticketRepository: Repository<Ticket>,
  ) {}

  async create(text: string): Promise<Ticket> {
    const ticket = this.ticketRepository.create({
      text,
      status: 'new',
    });
    return this.ticketRepository.save(ticket);
  }

  async findAll(
    status?: string,
    from?: string,
    to?: string,
  ): Promise<Ticket[]> {
    const query = this.ticketRepository.createQueryBuilder('ticket');

    if (status) {
      query.andWhere('ticket.status = :status', { status });
    }

    if (from && to) {
      query.andWhere('ticket.createdAt BETWEEN :from AND :to', { from, to });
    } else if (from) {
      query.andWhere('ticket.createdAt >= :from', { from });
    } else if (to) {
      query.andWhere('ticket.createdAt <= :to', { to });
    }

    return query.getMany();
  }

  async findOne(id: number): Promise<Ticket> {
    const ticket = await this.ticketRepository.findOneBy({ id });
    if (!ticket) {
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }
    return ticket;
  }

  async updateStatus(id: number, status: string): Promise<Ticket> {
    const ticket = await this.findOne(id);
    ticket.status = status;
    return this.ticketRepository.save(ticket);
  }

  async resolve(id: number, resolutionText: string): Promise<Ticket> {
    const ticket = await this.findOne(id);
    ticket.status = 'done';
    ticket.resolutionText = resolutionText;
    return this.ticketRepository.save(ticket);
  }

  async cancel(id: number, reason: string): Promise<Ticket> {
    const ticket = await this.findOne(id);
    ticket.status = 'canceled';
    ticket.cancellationReason = reason;
    return this.ticketRepository.save(ticket);
  }
}

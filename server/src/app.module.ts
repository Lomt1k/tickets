import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './ormconfig';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), TicketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

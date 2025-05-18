import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: './database.sqlite',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // Только для dev!
};

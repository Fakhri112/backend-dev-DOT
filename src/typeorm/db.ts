import { DataSourceOptions } from 'typeorm';
import { config as dotenvConfig } from 'dotenv';
import { Post } from './entities/post';

dotenvConfig({ path: '.env' });

export const dataSourceOption: DataSourceOptions = {
  type: process.env.DB_TYPE as any,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT as any,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  migrations: ['../migration/*.ts'],
  entities: [Post],
};

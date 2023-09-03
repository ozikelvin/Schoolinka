import { DataSource , DataSourceOptions , EntityManager } from 'typeorm';
import { Post } from '../Entity/Post';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'ozikelvin@123',
    database: 'blog',
    synchronize: true,
    logging: true,
    entities: [Post],
});
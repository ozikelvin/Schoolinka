import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
	EntityOptions,
	CreateDateColumn,
} from "typeorm";

@Entity()
export class Post {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	author: string;

	@Column()
	title: string;

	@Column()
	body: string;

	@Column()
	comment: string;

	@CreateDateColumn()
	date: Date;
}

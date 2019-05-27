import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity('users', { synchronize: false })
export class User extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column('text')
	email: string;

	@Column('int', { default: 0 })
	count: number;

	@Column('text', { nullable: true })
	stripeId: string | null;

	@Column('text', { default: 'free-trial' })
	type: string;

	@Column('text', { nullable: true })
	ccLast4: string | null;

	@Column('text')
	password: string;

	@CreateDateColumn({ type: 'timestamptz' })
	created_at: Date;

	@UpdateDateColumn({ type: 'timestamptz' })
	updated_at: Date;
}

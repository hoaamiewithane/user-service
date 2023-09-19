import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  role: string;
}
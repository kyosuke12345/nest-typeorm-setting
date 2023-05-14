import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 30,
  })
  firstName: string;

  @Column({
    length: 30,
  })
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}
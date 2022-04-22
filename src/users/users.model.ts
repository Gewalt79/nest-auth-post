import { Column, DataType, Model, Table, BelongsToMany, HasMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';
import { Post } from 'src/posts/posts.model';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unique indentifier' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'user@mail.ru', description: 'Email adress' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: '123456789', description: 'Password' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: 'true', description: 'Banned or not' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;

  @ApiProperty({ example: 'Because', description: 'Ban reason' })
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  role: Role[];

  @HasMany(() => Post)
  posts: Post[];
}

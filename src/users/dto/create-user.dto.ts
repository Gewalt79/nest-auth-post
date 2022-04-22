import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.ru', description: 'email' })
  @IsString({ message: 'Should be string' })
  @IsEmail({}, { message: 'Wrong email adress' })
  readonly email: string;

  @ApiProperty({ example: '123456789', description: 'password' })
  @IsString({ message: 'Should be string' })
  @Length(4, 16, { message: 'Min password length is 4, max is 16' })
  readonly password: string;
}

import { IsNotEmpty,IsString } from 'class-validator';

export class LogoutUserDto {
  @IsNotEmpty()
  @IsString()
  accessToken: string;

  @IsNotEmpty()
  @IsString()
  refreshToken: string;
}
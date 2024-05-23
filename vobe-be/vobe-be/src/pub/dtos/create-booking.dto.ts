import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ETimeSlot } from 'src/enums';

export class CreateBookingDto {
  @IsNotEmpty()
  @IsEnum(ETimeSlot)
  timeSlot: ETimeSlot;

  @IsNumber()
  @IsNotEmpty()
  peopleCount: number;

  @IsOptional()
  @IsBoolean()
  needValet: boolean;

  @IsOptional()
  @IsString()
  carNumber: string;
}

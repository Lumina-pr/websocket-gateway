import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class DeviceStatusDto {
  @IsString()
  @IsNotEmpty()
  deviceId: string;

  @IsNumber()
  current: number;

  @IsNumber()
  voltage: number;
}

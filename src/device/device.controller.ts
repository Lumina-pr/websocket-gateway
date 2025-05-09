import { Controller, Logger } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { DeviceStatusDto } from './dto/device-status.dto';
import { DeviceService } from './device.service';

@Controller('device')
export class DeviceController {
  private readonly logger = new Logger(DeviceController.name);

  constructor(private readonly deviceService: DeviceService) {}

  @EventPattern('device.status')
  handleDeviceStatus(@Payload() data: DeviceStatusDto) {
    const { deviceId, current, voltage } = data;
    this.logger.warn(`Mensaje recibido!!!: ${JSON.stringify(data)}`);
    this.deviceService.emitEvent(deviceId, { current, voltage });
  }
}

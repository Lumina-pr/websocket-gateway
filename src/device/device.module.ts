import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceGateway } from './device.gateway';
import { NatsModule } from 'src/transports/nats.module';
import { DeviceController } from './device.controller';

@Module({
  imports: [NatsModule],
  providers: [DeviceGateway, DeviceService],
  controllers: [DeviceController],
})
export class DeviceModule {}

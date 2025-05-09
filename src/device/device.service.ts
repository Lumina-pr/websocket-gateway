import { Injectable, Logger } from '@nestjs/common';
import { Server } from 'socket.io';

@Injectable()
export class DeviceService {
  private socketServer: Server;
  private logger: Logger = new Logger(DeviceService.name);

  setSocketServer(server: Server) {
    this.socketServer = server;
  }

  // Método para emitir eventos a los clientes WebSocket
  emitEvent(event: string, data: any) {
    if (this.socketServer) {
      this.logger.log(`Emitting event: ${event}`);
      this.socketServer.emit(event, data);
    }
  }
}

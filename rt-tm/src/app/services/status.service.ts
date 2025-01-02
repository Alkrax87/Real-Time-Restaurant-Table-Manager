import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  availableStatus(tableIndex: number, floorIndex: number) {
    this.socket.emit('newAvailable', {
      tableIndex: tableIndex,
      floorIndex: floorIndex,
    });
  }

  busyStatus(tableIndex: number, floorIndex: number) {
    this.socket.emit('newBusy', {
      tableIndex: tableIndex,
      floorIndex: floorIndex,
    });
  }
}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private socket: Socket;
  private destroy$ = new Subject<void>();

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  getInitialData(): Observable<any> {
    return new Observable((observer) => {
      this.socket.on('initialData', (data) => {
        observer.next(data);
      });
    });
  }

  getTotalTables(): Observable<number> {
    return new Observable((observer) => {
      this.socket.on('totalTables', (data) => {
        observer.next(data);
      });
    });
  }

  getAvailableTables(): Observable<number> {
    return new Observable((observer) => {
      this.socket.on('availableTables', (data) => {
        observer.next(data);
      });
    });
  }

  getBusyTables(): Observable<number> {
    return new Observable((observer) => {
      this.socket.on('busyTables', (data) => {
        observer.next(data);
      });
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.socket.disconnect();
  }
}

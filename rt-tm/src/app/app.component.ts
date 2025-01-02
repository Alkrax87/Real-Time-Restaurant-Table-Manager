import { Component } from '@angular/core';
import { FloorContainerComponent } from './shared/floor-container/floor-container.component';
import { LegendComponent } from './shared/legend/legend.component';
import { CommonModule } from '@angular/common';
import { ConfigService } from './services/config.service';
import { combineLatest, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [FloorContainerComponent, LegendComponent, CommonModule],
  template: `
    <app-legend
      [total]="totalTables"
      [available]="availableTables"
      [busy]="busyTables"
    ></app-legend>
    <ng-container *ngFor="let item of data; let i = index">
      <app-floor-container
        [floorName]="item.name"
        [floorSize]="item.size"
        [startNumber]="getStartNumber(i)"
      ></app-floor-container>
    </ng-container>
  `,
  styles: ``,
})
export class AppComponent {
  totalTables: number = 0;
  availableTables: number = 0;
  busyTables: number = 0;
  data: { name: string; size: number }[] = [];

  private destroy$ = new Subject<void>();

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    combineLatest([
      this.configService.getInitialData(),
      this.configService.getTotalTables(),
      this.configService.getAvailableTables(),
      this.configService.getBusyTables(),
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(([floors, total, available, busy]) => {
        this.data = floors;
        this.totalTables = total;
        this.availableTables = available;
        this.busyTables = busy;
      });
  }

  getStartNumber(index: number): number {
    return (
      this.data.slice(0, index).reduce((sum, floor) => sum + floor.size, 0) + 1
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

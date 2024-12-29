import { Component } from '@angular/core';
import { FloorContainerComponent } from './shared/floor-container/floor-container.component';
import { LegendComponent } from './shared/legend/legend.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FloorContainerComponent, LegendComponent, CommonModule],
  template: `
    <app-legend [total]="getTotalTables()"></app-legend>
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
  data = [
    { name: 'Piso 1', size: 3 },
    { name: 'Piso 2', size: 5 },
    { name: 'Piso 3', size: 4 },
    { name: 'Piso 4', size: 12 },
  ];

  getTotalTables(): number {
    return this.data.reduce((total, floor) => total + floor.size, 0);
  }

  getStartNumber(index: number): number {
    return (
      this.data.slice(0, index).reduce((sum, floor) => sum + floor.size, 0) + 1
    );
  }
}

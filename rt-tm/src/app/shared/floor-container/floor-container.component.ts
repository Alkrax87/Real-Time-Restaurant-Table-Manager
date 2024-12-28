import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-floor-container',
  imports: [TableComponent],
  templateUrl: './floor-container.component.html',
  styles: ``,
})
export class FloorContainerComponent {
  floorName: string = 'Piso';
  floorSize: number = 10;
}

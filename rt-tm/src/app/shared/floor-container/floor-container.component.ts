import { Component, Input } from '@angular/core';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-floor-container',
  imports: [TableComponent],
  templateUrl: './floor-container.component.html',
  styles: ``,
})
export class FloorContainerComponent {
  @Input() floorName!: string;
  @Input() floorSize!: number;
  @Input() startNumber!: number;
}

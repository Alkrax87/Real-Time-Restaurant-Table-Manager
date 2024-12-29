import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styles: ``,
})
export class TableComponent {
  @Input() tableIndex!:number;
  tableStatus = true;
}

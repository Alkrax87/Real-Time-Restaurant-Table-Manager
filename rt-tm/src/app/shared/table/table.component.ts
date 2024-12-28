import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styles: ``,
})
export class TableComponent {
  tableName = 'Mesa';
  tableStatus = true;
}

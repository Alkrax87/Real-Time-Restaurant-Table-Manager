import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StatusService } from '../../services/status.service';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styles: ``,
})
export class TableComponent {
  @Input() floorIndex!: number;
  @Input() tableIndex!: number;
  @Input() tableNumber!: number;
  @Input() tableStatus!: boolean;

  constructor(private statusService: StatusService) {}

  changeStatus() {
    this.tableStatus = !this.tableStatus;
    if (this.tableStatus) {
      this.statusService.availableStatus(this.tableIndex, this.floorIndex);
    } else {
      this.statusService.busyStatus(this.tableIndex, this.floorIndex);
    }
  }
}

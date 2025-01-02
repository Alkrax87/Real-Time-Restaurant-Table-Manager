import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-legend',
  imports: [],
  templateUrl: './legend.component.html',
  styles: ``,
})
export class LegendComponent {
  @Input() total!: number;
  @Input() available!: number;
  @Input() busy!: number;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-legend',
  imports: [],
  templateUrl: './legend.component.html',
  styles: ``,
})
export class LegendComponent {
  @Input() total!: number;
  available: number = 30;
  busy: number = 20;
}

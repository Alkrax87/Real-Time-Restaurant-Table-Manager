import { Component } from '@angular/core';

@Component({
  selector: 'app-legend',
  imports: [],
  templateUrl: './legend.component.html',
  styles: ``,
})
export class LegendComponent {
  total: number = 50;
  available: number = 30;
  busy: number = 20;
}

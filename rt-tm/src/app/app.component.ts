import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FloorContainerComponent } from './shared/floor-container/floor-container.component';
import { LegendComponent } from './shared/legend/legend.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FloorContainerComponent, LegendComponent],
  template: `
    <app-legend></app-legend>
    <app-floor-container></app-floor-container>
    <app-floor-container></app-floor-container>

    <router-outlet />
  `,
  styles: ``,
})
export class AppComponent {}

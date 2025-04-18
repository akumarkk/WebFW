import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IgxDataGridComponent } from './igx-grid/igx-grid.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IgxDataGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // imports: [IgxDataGridComponent]
})
export class AppComponent {
  title = 'iggrid';
}

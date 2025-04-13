import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NestedcompcommComponent } from './comp/nestedcompcomm/nestedcompcomm.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NestedcompcommComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // imports: [NestedcompcommComponent]
})
export class AppComponent {
  title = 'demos';
  name = 'Yash';
  description = 'Yash, the men/hero!';
}

import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
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

  @ViewChild('hRefVar')
  h4Ref!: ElementRef;

  update(arg:HTMLElement) {
    console.log(this.h4Ref);
    this.h4Ref.nativeElement.style.color = "red";
    arg.style.backgroundColor = "teal";


  }
}

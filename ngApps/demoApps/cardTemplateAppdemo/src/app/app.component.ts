// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<h3>Welcome to Ng! </h3>
    <button (click)="showTemplate()">Show Card</button>
    <div #templateContainer></div>
    `,
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cardTemplateAppdemo';
  @ViewChild('cardTemplate', ) externalTemplate!: TemplateRef<any>;
  @ViewChild('templateContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  showTemplate(): void {
    console.log(this.externalTemplate);
    console.log(this.container);
    this.container.createEmbeddedView(this.externalTemplate, { name: 'Angular User' });
  }
}

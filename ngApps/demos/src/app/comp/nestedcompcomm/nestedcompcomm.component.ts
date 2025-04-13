import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-nestedcompcomm',
  imports: [],
  templateUrl: './nestedcompcomm.component.html',
  styleUrl: './nestedcompcomm.component.css'
})
export class NestedcompcommComponent {

  @Input()
  name!:string;

  @Input()
  description!:string;
}

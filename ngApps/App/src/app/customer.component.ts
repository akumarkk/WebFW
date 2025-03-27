import { Component } from '@angular/core';
import {Customer} from './customer.model'


@Component({
    selector: 'app-root',
    templateUrl: './customer.view.html',
    styleUrls: ['./customer.component.scss']
})
export class CustomerComponent{
    title= 'Customer Application';
    CustomerModel : Customer = new Customer();
    
}
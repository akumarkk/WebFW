import { Component } from '@angular/core';
import {Customer} from './customer.model'

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './customer.view.html',
    styleUrls: ['./customer.component.scss'],
    imports: [FormsModule]
})
export class CustomerComponent{
    title= 'Customer Application';
    CustomerModel : Customer = new Customer();

    constructor() {
        this.CustomerModel.CustomerAmount = 100;
        this.CustomerModel.CustomerCode = "100CG";
        this.CustomerModel.CustomerName = "Sudheer";
    }
    
}
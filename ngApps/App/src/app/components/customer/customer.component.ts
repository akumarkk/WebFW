import { Component } from '@angular/core';
import {Customer} from './customer.model'

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-root',
    templateUrl: './customer.view.html',
    styleUrls: ['./customer.component.scss'],
    imports: [FormsModule, CommonModule]
})
export class CustomerComponent{
    title= 'Customer Application';
    CustomerModel : Customer = new Customer();
    csModels:Array<Customer> = new Array<Customer>();

    Add() {
        this.csModels.push(this.CustomerModel);
        this.CustomerModel = new Customer();
        console.info(this.csModels.length);
    }

    constructor() {
        this.CustomerModel.CustomerAmount = 100;
        this.CustomerModel.CustomerCode = "100CG";
        this.CustomerModel.CustomerName = "Sudheer";
    }
    
}
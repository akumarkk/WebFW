import {CustomerComponent} from "./components/customer/customer.component"
import {SupplierComponent} from "./components/supplier/supplier.component"
import {HomeComponent} from "./components/home/home.component"
import {MasterComponent} from "./components/master/master.component"

import { FormsModule, NgModel } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser"
import bootstrap from "../main.server"
import { NgModule } from "@angular/core"


@NgModule({
    declarations: [],
    imports: [
        BrowserModule, FormsModule
    ],
    providers: [],
    bootstrap: [MasterComponent]
})
export class AppModule{}
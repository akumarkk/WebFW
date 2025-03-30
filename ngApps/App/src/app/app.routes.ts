import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component"
import {CustomerComponent} from "./components/customer/customer.component"
import {SupplierComponent} from "./components/supplier/supplier.component"
import {MasterComponent} from "./components/master/master.component"

export const routes: Routes = 
[
    
    {
        path: "Home",
        component: HomeComponent
    },
    {
        path: "Supplier",
        component: SupplierComponent
    },
    {
        path: "Customer",
        component: CustomerComponent
    },
    {
        path: "",
        component: MasterComponent
    },
];

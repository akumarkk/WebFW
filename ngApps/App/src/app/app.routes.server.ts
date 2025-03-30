import { RenderMode, ServerRoute } from '@angular/ssr';
import {HomeComponent} from "./components/home/home.component"
import {CustomerComponent} from "./components/customer/customer.component"
import {SupplierComponent} from "./components/supplier/supplier.component"


export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];

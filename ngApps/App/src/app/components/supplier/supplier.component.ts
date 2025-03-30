import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router'


@Component({
    selector: "app-root",
    // selector: 'app-full-page',
    templateUrl: "./supplier.view.html",
    styleUrl: "./supplier.component.scss",
    imports: [RouterModule, CommonModule, FormsModule],})
    export class SupplierComponent{
        currentUrl: string;

        constructor(private router: Router) {
            this.currentUrl = this.router.url;
            console.log("ctor ",  this.currentUrl);
          }

        isMaster() {
            // let seg =  this.currentUrl.split("/");
            console.log(this.currentUrl);    
            if(this.currentUrl == "/Supplier"){
                return true;
            }
            return false;
        }
        
    }
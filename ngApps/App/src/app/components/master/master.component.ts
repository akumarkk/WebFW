import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { Router } from '@angular/router';

@Component({
    selector: "app-root",
    templateUrl: "./master.view.html",
    styleUrl: "./master.component.scss",
    imports: [FormsModule, CommonModule, RouterModule]})
export class MasterComponent {
    currentUrl: string;

    constructor(private router: Router) {
        this.currentUrl = this.router.url;
        console.log("ctor ", this.currentUrl);
    }

    // not required as component is loaded once!
    isMaster() {
        // let seg =  this.currentUrl.split("/");
        console.log(this.currentUrl);
        // if(seg[seg.length-1] == ""){
        //     return true;
        // }

        if (this.currentUrl == "/") {
            return true;
        }
        return false;
    }

}
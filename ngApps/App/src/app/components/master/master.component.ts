import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

@Component({
    selector: "app-root",
    templateUrl: "./master.view.html",
    styleUrl: "./master.component.scss",
    imports: [FormsModule, CommonModule, RouterModule]})
export class MasterComponent{
        
}
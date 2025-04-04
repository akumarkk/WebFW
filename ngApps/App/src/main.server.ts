import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/appcomponent/app.component';
import { config } from './app/app.config.server';

import { CustomerComponent } from './app/components/customer/customer.component';
import { MasterComponent } from './app/components/master/master.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
const bootstrap = () => bootstrapApplication(MasterComponent, config);

export default bootstrap;

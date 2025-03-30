import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/appcomponent/app.component';

import { CustomerComponent } from './app/components/customer/customer.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.mainmodule';

import {MasterComponent} from "./app/components/master/master.component"
// import { appConfig } from './app/app.config';

// const bootstrap = () => bootstrapApplication(MasterComponent, appConfig);

// export default bootstrap;
// platformBrowserDynamic().bootstrapModule(AppModule)
// .catch(err => console.error(err));
bootstrapApplication(CustomerComponent, appConfig)
  .catch((err) => console.error(err));

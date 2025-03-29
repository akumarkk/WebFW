import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/appcomponent/app.component';

import { CustomerComponent } from './app/components/customer/customer.component';

bootstrapApplication(CustomerComponent, appConfig)
  .catch((err) => console.error(err));

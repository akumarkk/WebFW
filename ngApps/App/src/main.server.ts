import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

import { CustomerComponent } from './app/customer.component';

const bootstrap = () => bootstrapApplication(CustomerComponent, config);

export default bootstrap;

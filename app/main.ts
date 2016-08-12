import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {AppRouterProviders}   from './components/app.routes';

import {AppComponent} from './components/app.component';
import {NO_SANITIZATION_PROVIDERS} from './components/no_sanitizer';


bootstrap(AppComponent, [AppRouterProviders, HTTP_PROVIDERS,NO_SANITIZATION_PROVIDERS]);

import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {AppRouterProviders}   from './components/app.routes';
import {AUTH_PROVIDERS} from 'angular2-jwt';

import {AppComponent} from './components/app.component';
import {NO_SANITIZATION_PROVIDERS} from './components/no_sanitizer';


bootstrap(AppComponent, [AppRouterProviders, HTTP_PROVIDERS, AUTH_PROVIDERS, NO_SANITIZATION_PROVIDERS]);

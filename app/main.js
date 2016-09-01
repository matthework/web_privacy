"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_routes_1 = require('./components/app.routes');
var angular2_jwt_1 = require('angular2-jwt');
var app_component_1 = require('./components/app.component');
var no_sanitizer_1 = require('./components/no_sanitizer');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [app_routes_1.AppRouterProviders, http_1.HTTP_PROVIDERS, angular2_jwt_1.AUTH_PROVIDERS, no_sanitizer_1.NO_SANITIZATION_PROVIDERS]);
//# sourceMappingURL=main.js.map
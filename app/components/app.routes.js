"use strict";
var router_1 = require('@angular/router');
var main_component_1 = require('./main/main.component');
var web_component_1 = require('./web/web.component');
var doc_component_1 = require('./doc/doc.component');
var setting_component_1 = require('./setting/setting.component');
var about_component_1 = require('./about/about.component');
var routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: '#',
        redirectTo: 'main',
    },
    {
        path: 'main',
        // name: 'Main',
        component: main_component_1.MainComponent,
    },
    {
        path: 'web',
        component: web_component_1.WebComponent,
    },
    {
        path: 'doc',
        component: doc_component_1.DocComponent,
    },
    {
        path: 'setting',
        component: setting_component_1.SettingComponent,
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent,
    }
];
exports.AppRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map
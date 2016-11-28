"use strict";
var router_1 = require('@angular/router');
var main_component_1 = require('./main/main.component');
var web_component_1 = require('./web/web.component');
var doc_component_1 = require('./doc/doc.component');
var options_component_1 = require('./options/options.component');
var about_component_1 = require('./about/about.component');
var word_component_1 = require('./word/word.component');
var word_edit_component_1 = require('./word/word-edit/word-edit.component');
var word_new_component_1 = require('./word/word-new/word-new.component');
var routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
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
        path: 'options',
        component: options_component_1.OptionsComponent,
    },
    {
        path: 'keywords',
        component: word_component_1.WordComponent,
    },
    {
        path: 'keyword/edit/:id',
        component: word_edit_component_1.WordEditComponent,
    },
    {
        path: 'keyword/new',
        component: word_new_component_1.WordNewComponent,
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
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {WordService} from './word/word.service';
import {AuthService} from './auth/auth.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/components/app.component.html',
    styleUrls: ['app/components/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [WordService,AuthService]
})

export class AppComponent{
    title = 'My Privacy App!';
    constructor(private auth: AuthService) {}
}



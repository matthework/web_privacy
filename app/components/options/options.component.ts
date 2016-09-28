import {Component} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

import {AuthService} from '../auth/auth.service';

@Component({
    selector: 'my-options',
    templateUrl: 'app/components/options/options.component.html',
    styleUrls: ['app/components/options/options.component.css'],
})

export class OptionsComponent {

    active = false;
    newS1 = "";
    newS2 = "";
    newS3 = "";
    cat = "";
    inused = false;
    keywords = [{"name":"password", "cat":"personal info", "inused":true},
                {"name":"credit card", "cat":"finance", "inused":true},
                {"name":"income", "cat":"finance", "inused":true},
                {"name":"sex", "cat":"health", "inused":false},
                {"name":"age", "cat":"personal info", "inused":true}];

    constructor(
        private _router: Router,
        private auth: AuthService) {}

    toMain() {
        this._router.navigate(['/main']);
    }

}

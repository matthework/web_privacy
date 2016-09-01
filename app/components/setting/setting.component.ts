import {Component} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

import {AuthService} from '../auth/auth.service';

@Component({
    selector: 'my-setting',
    templateUrl: 'app/components/setting/setting.component.html',
    styleUrls: ['app/components/setting/setting.component.css'],
})

export class SettingComponent {

    active = false;
    newWord = "";
    cat = "";
    inused = false;
    keywords = [{"name":"password", "cat":"personal info", "inused":true},
                {"name":"credit card", "cat":"finance", "inused":true},
                {"name":"income", "cat":"finance", "inused":true},
                {"name":"sex", "cat":"health", "inused":false},
                {"name":"age", "cat":"personal info", "inused":true}];

    constructor(private _router: Router,
        private auth: AuthService) {}

    toMain() {
        this._router.navigate(['/main']);
    }

}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var auth_service_1 = require('../auth/auth.service');
var SettingComponent = (function () {
    function SettingComponent(_router, auth) {
        this._router = _router;
        this.auth = auth;
        this.active = false;
        this.newWord = "";
        this.cat = "";
        this.inused = false;
        this.keywords = [{ "name": "password", "cat": "personal info", "inused": true },
            { "name": "credit card", "cat": "finance", "inused": true },
            { "name": "income", "cat": "finance", "inused": true },
            { "name": "sex", "cat": "health", "inused": false },
            { "name": "age", "cat": "personal info", "inused": true }];
    }
    SettingComponent.prototype.toMain = function () {
        this._router.navigate(['/main']);
    };
    SettingComponent = __decorate([
        core_1.Component({
            selector: 'my-setting',
            templateUrl: 'app/components/setting/setting.component.html',
            styleUrls: ['app/components/setting/setting.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
    ], SettingComponent);
    return SettingComponent;
}());
exports.SettingComponent = SettingComponent;
//# sourceMappingURL=setting.component.js.map
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
var MainComponent = (function () {
    function MainComponent(_router, auth) {
        this._router = _router;
        this.auth = auth;
        this.input = "";
        this.url = "";
        this.showOut = false;
        this.data = "";
        this.aa = "<h1>hahahhahahh...</h1>";
        this.bb = "document.body.style.backgroundColor='lightblue'";
    }
    MainComponent.prototype.modifySourcePage = function (str) {
        console.log('input value: ', str.substring(0, 4));
        if (str.substring(0, 4) != "http") {
            str = "http://" + str;
        }
        this.url = str;
        // window.location.href=this.url;
        console.log('input value: ', this.url);
        this.showOut = true;
    };
    // loadXMLDoc(theURL:string) {
    //     if (window.XMLHttpRequest)
    //     {// code for IE7+, Firefox, Chrome, Opera, Safari, SeaMonkey
    //         var xmlhttp=new XMLHttpRequest();
    //     }
    //     else
    //     {// code for IE6, IE5
    //         var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    //     }
    //     xmlhttp.onreadystatechange=function()
    //     {
    //         if (xmlhttp.readyState==4 && xmlhttp.status==200)
    //         {
    //             alert(xmlhttp.responseText);
    //         }
    //     }
    //     xmlhttp.open("GET", theURL, false);
    //     xmlhttp.send();
    // }
    MainComponent.prototype.toMain = function () {
        this._router.navigate(['/main']);
        // location.reload();
        this.showOut = false;
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'my-main',
            templateUrl: 'app/components/main/main.component.html',
            styleUrls: ['app/components/main/main.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map
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
var DocComponent = (function () {
    function DocComponent(_router) {
        this._router = _router;
        this.input = "";
        this.url = "";
        this.showOut = false;
        this.data = "";
        this.aa = "<h1>hahahhahahh...</h1>";
        this.bb = "document.body.style.backgroundColor='lightblue'";
    }
    DocComponent.prototype.modifySourcePage = function (str) {
        console.log('input value: ', str.substring(0, 4));
        if (str.substring(0, 4) != "http") {
            str = "http://" + str;
        }
        this.url = str;
        // window.location.href=this.url;
        console.log('input value: ', this.url);
        this.showOut = true;
    };
    DocComponent.prototype.toMain = function () {
        this._router.navigate(['/doc']);
        // location.reload();
        this.showOut = false;
    };
    DocComponent = __decorate([
        core_1.Component({
            selector: 'my-doc',
            templateUrl: 'app/components/doc/doc.component.html',
            styleUrls: ['app/components/doc/doc.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], DocComponent);
    return DocComponent;
}());
exports.DocComponent = DocComponent;
//# sourceMappingURL=doc.component.js.map
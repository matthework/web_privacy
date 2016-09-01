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
var word_service_1 = require('../word.service');
var auth_service_1 = require('../../auth/auth.service');
var yes_no_pipe_1 = require('../../pipe/yes-no-pipe');
var WordDetailComponent = (function () {
    function WordDetailComponent(_wordService, _router, route, auth) {
        this._wordService = _wordService;
        this._router = _router;
        this.route = route;
        this.auth = auth;
    }
    WordDetailComponent.prototype.ngOnInit = function () {
        this.getParams();
        this.getWord();
    };
    WordDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    WordDetailComponent.prototype.getParams = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
    };
    WordDetailComponent.prototype.getWord = function () {
        var _this = this;
        console.log('id from _routeParams: ', this.id);
        this._wordService.getWord(this.id).subscribe(function (word) { _this.word = word; });
    };
    WordDetailComponent.prototype.toWords = function () {
        this._router.navigate(['/words']);
        // location.reload();
    };
    WordDetailComponent.prototype.editWord = function () {
        this._router.navigate(['/word/edit', this.id]);
    };
    WordDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    WordDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-word-detail',
            templateUrl: 'app/components/word/word-detail/word-detail.component.html',
            styleUrls: ['app/components/word/word-detail/word-detail.component.css'],
            pipes: [yes_no_pipe_1.YesNoPipe]
        }), 
        __metadata('design:paramtypes', [word_service_1.WordService, router_1.Router, router_1.ActivatedRoute, auth_service_1.AuthService])
    ], WordDetailComponent);
    return WordDetailComponent;
}());
exports.WordDetailComponent = WordDetailComponent;
//# sourceMappingURL=word-detail.component.js.map
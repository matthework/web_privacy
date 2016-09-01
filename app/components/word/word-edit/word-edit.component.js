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
var WordEditComponent = (function () {
    function WordEditComponent(_wordService, _router, route, auth) {
        this._wordService = _wordService;
        this._router = _router;
        this.route = route;
        this.auth = auth;
        this.active = false;
    }
    WordEditComponent.prototype.ngOnInit = function () {
        this.getParams();
        this.getWord();
    };
    WordEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    WordEditComponent.prototype.getParams = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
    };
    WordEditComponent.prototype.getWord = function () {
        var _this = this;
        console.log('id from _routeParams: ', this.id);
        this._wordService.getWord(this.id).subscribe(function (word) { _this.word = word; });
    };
    WordEditComponent.prototype.toWords = function () {
        this._router.navigate(['/words']);
        // location.reload();
    };
    WordEditComponent.prototype.toWordDetail = function () {
        this._router.navigate(['/word/detail', this.id]);
        // location.reload();
    };
    WordEditComponent.prototype.updateWord = function () {
        this.word.name = this.word.name.toUpperCase();
        this.word.category = this.word.category.toUpperCase();
        this.word.tags = this.word.tags.sort();
        var value = JSON.stringify(this.word);
        this._wordService.updateWord(this.id, value).subscribe();
        console.log('you submitted value: ', value);
        this.toWords();
    };
    WordEditComponent.prototype.addWord = function () {
        this._router.navigate(['/word/new']);
    };
    WordEditComponent.prototype.removeWord = function () {
        this._wordService.deleteWord(this.id).subscribe();
        this.toWords();
    };
    WordEditComponent.prototype.deleteWordPop = function () {
        var name = this.word.name;
        var r = confirm("Are you sure you want to delete Word: " + name.toUpperCase() + " ?");
        if (r == true) {
            this.removeWord();
        }
    };
    WordEditComponent.prototype.addTag = function (tag) {
        this.word.tags.push(tag.toUpperCase());
    };
    WordEditComponent.prototype.deleteTag = function (tag) {
        var index = this.word.tags.indexOf(tag);
        this.word.tags.splice(index, 1);
    };
    WordEditComponent.prototype.goBack = function () {
        window.history.back();
    };
    WordEditComponent = __decorate([
        core_1.Component({
            selector: 'my-word-edit',
            templateUrl: 'app/components/word/word-edit/word-edit.component.html',
            styleUrls: ['app/components/word/word-edit/word-edit.component.css']
        }), 
        __metadata('design:paramtypes', [word_service_1.WordService, router_1.Router, router_1.ActivatedRoute, auth_service_1.AuthService])
    ], WordEditComponent);
    return WordEditComponent;
}());
exports.WordEditComponent = WordEditComponent;
//# sourceMappingURL=word-edit.component.js.map
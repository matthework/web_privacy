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
var WordNewComponent = (function () {
    function WordNewComponent(_wordService, _router, auth) {
        this._wordService = _wordService;
        this._router = _router;
        this.auth = auth;
        this.newWord = { name: "", category: "", tags: [], inused: true, others: [] };
        this.newTag = "";
        this.wordNet = false;
    }
    WordNewComponent.prototype.addWord = function () {
        this.newWord.name = this.newWord.name.toUpperCase();
        this.newWord.category = this.newWord.category.toUpperCase();
        this.newWord.tags = this.newWord.tags.sort();
        var value = JSON.stringify(this.newWord);
        this._wordService.addWord(value).subscribe();
        console.log('you submitted value: ', value);
        this.toWords();
    };
    WordNewComponent.prototype.toWords = function () {
        this._router.navigate(['/words']);
        // location.reload();
    };
    WordNewComponent.prototype.addTag = function (tag) {
        this.newWord.tags.push(tag.toUpperCase());
    };
    WordNewComponent.prototype.deleteTag = function (tag) {
        var index = this.newWord.tags.indexOf(tag);
        this.newWord.tags.splice(index, 1);
    };
    WordNewComponent.prototype.goBack = function () {
        window.history.back();
    };
    WordNewComponent = __decorate([
        core_1.Component({
            selector: 'my-word-new',
            templateUrl: 'app/components/word/word-new/word-new.component.html',
            styleUrls: ['app/components/word/word-new/word-new.component.css']
        }), 
        __metadata('design:paramtypes', [word_service_1.WordService, router_1.Router, auth_service_1.AuthService])
    ], WordNewComponent);
    return WordNewComponent;
}());
exports.WordNewComponent = WordNewComponent;
//# sourceMappingURL=word-new.component.js.map
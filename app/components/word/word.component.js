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
var word_detail_component_1 = require('./word-detail/word-detail.component');
var word_edit_component_1 = require('./word-edit/word-edit.component');
var word_service_1 = require('./word.service');
var auth_service_1 = require('../auth/auth.service');
var filter_array_pipe_1 = require('../pipe/filter-array-pipe');
var yes_no_pipe_1 = require('../pipe/yes-no-pipe');
var WordComponent = (function () {
    function WordComponent(_router, _wordService, auth) {
        this._router = _router;
        this._wordService = _wordService;
        this.auth = auth;
        this.words = [];
        this.showAll = true;
    }
    WordComponent.prototype.ngOnInit = function () {
        this.getWords();
    };
    WordComponent.prototype.getWords = function () {
        var _this = this;
        this._wordService.getWords().subscribe(function (words) { _this.words = words; });
    };
    WordComponent.prototype.onSelect = function (word) {
        this.selectedWord = word;
    };
    WordComponent.prototype.toWords = function () {
        this._router.navigate(['/words']);
        location.reload();
    };
    WordComponent.prototype.toDetail = function () {
        this._router.navigate(['/word/detail', this.selectedWord._id]);
    };
    WordComponent.prototype.toEdit = function (wid) {
        this._router.navigate(['/word/edit', wid]);
    };
    WordComponent.prototype.addWord = function () {
        this._router.navigate(['/word/new']);
    };
    WordComponent.prototype.removeWord = function (id) {
        this._wordService.deleteWord(id).subscribe();
        location.reload();
    };
    WordComponent.prototype.deleteWordPop = function (id) {
        var r = confirm("Are you sure you want to delete this keyword ?");
        if (r == true) {
            this.removeWord(id);
        }
    };
    WordComponent.prototype.groupByTag = function (tag) {
        var w = [];
        if (this.words != null) {
            for (var i = 0; i < this.words.length; i++) {
                if (this.words[i].tags.indexOf(tag) != -1) {
                    this.words[i].tags = [tag];
                    w.push(this.words[i]);
                }
            }
        }
        this.words = w;
        this.showAll = false;
    };
    WordComponent.prototype.groupByCat = function (cat) {
        var w = [];
        if (this.words != null) {
            for (var i = 0; i < this.words.length; i++) {
                if (this.words[i].category == cat) {
                    w.push(this.words[i]);
                }
            }
        }
        this.words = w;
        this.showAll = false;
    };
    WordComponent = __decorate([
        core_1.Component({
            selector: 'my-word',
            templateUrl: 'app/components/word/word.component.html',
            styleUrls: ['app/components/word/word.component.css'],
            directives: [word_detail_component_1.WordDetailComponent, word_edit_component_1.WordEditComponent],
            pipes: [filter_array_pipe_1.FilterArrayPipe, yes_no_pipe_1.YesNoPipe]
        }), 
        __metadata('design:paramtypes', [router_1.Router, word_service_1.WordService, auth_service_1.AuthService])
    ], WordComponent);
    return WordComponent;
}());
exports.WordComponent = WordComponent;
//# sourceMappingURL=word.component.js.map
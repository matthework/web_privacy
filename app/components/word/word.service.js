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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var WordService = (function () {
    function WordService(_http) {
        this._http = _http;
    }
    WordService.prototype.getWords = function () {
        return this._http.get('/api/words').map(function (r) { return r.json(); });
    };
    WordService.prototype.getWord = function (id) {
        return this._http.get('/api/word/detail/' + id).map(function (r) { return r.json(); });
    };
    WordService.prototype.addWord = function (value) {
        var _messageStringified = value;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/api/word/new', _messageStringified, { headers: headers });
    };
    WordService.prototype.updateWord = function (id, value) {
        var _messageStringified = value;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/api/word/update/' + id, _messageStringified, { headers: headers });
    };
    WordService.prototype.deleteWord = function (id) {
        return this._http.post('/api/word/remove/' + id, "");
    };
    WordService.prototype.getWordNet = function (word) {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/xml');
        return this._http.get('http://www.stands4.com/services/v2/syno.php?uid=5289&tokenid=JMRltpwbHc2aFNf9&word=' + word).map(function (res) { return JSON.parse(xml2json(res.text(), '	')); });
        // return this._http.get('http://www.stands4.com/services/v2/syno.php?uid=5289&tokenid=JMRltpwbHc2aFNf9&word='+word).map(r => r.json());
    };
    WordService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WordService);
    return WordService;
}());
exports.WordService = WordService;
//# sourceMappingURL=word.service.js.map
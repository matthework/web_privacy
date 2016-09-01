import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WordService {

	constructor(private _http: Http) {}

	getWords():Observable<any> {
		return this._http.get('/api/words').map(r => r.json());
	}

	getWord(id:string):Observable<any> {
		return this._http.get('/api/word/detail/'+id).map(r => r.json());
	}

	addWord(value:string):Observable<any> {
		let _messageStringified = value;
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this._http.post('/api/word/new', _messageStringified, {headers});
	}

	updateWord(id:string,value:string):Observable<any> {
		let _messageStringified = value; 
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this._http.post('/api/word/update/'+id, _messageStringified, {headers});
	}

	deleteWord(id:string):Observable<any> {
		return this._http.post('/api/word/remove/'+id, "");
	}

}


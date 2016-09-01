import {Component,OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

import {Word} from '../word';
import {WordService} from '../word.service';

import {AuthService} from '../../auth/auth.service';

import {YesNoPipe} from '../../pipe/yes-no-pipe';

@Component({
    selector: 'my-word-detail',
    templateUrl: 'app/components/word/word-detail/word-detail.component.html',
    styleUrls: ['app/components/word/word-detail/word-detail.component.css'],
    pipes: [YesNoPipe]
})

export class WordDetailComponent implements OnInit {

    word: Word;
    sub: any;
    id: string;

    constructor(
        private _wordService: WordService, 
        private _router: Router,
        private route: ActivatedRoute,
        private auth: AuthService) {}

    ngOnInit() {
        this.getParams()
        this.getWord();
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getParams() {
        this.sub = this.route.params.subscribe(params => {
          this.id = params['id'];
        });
    }

    getWord() {
        console.log('id from _routeParams: ', this.id); 
        this._wordService.getWord(this.id).subscribe((word) => {this.word = word;});
    }

    toWords() {
        this._router.navigate(['/words']);
        // location.reload();
    }

    editWord() {
        this._router.navigate(['/word/edit', this.id]);
    }

    goBack() {
        window.history.back();
    }
}



import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Word} from './word';
import {WordEditComponent} from './word-edit/word-edit.component';
import {WordService} from './word.service';

import {AuthService} from '../auth/auth.service';

import {FilterArrayPipe} from '../pipe/filter-array-pipe';
import {YesNoPipe} from '../pipe/yes-no-pipe';

@Component({
    selector: 'my-word',
    templateUrl: 'app/components/word/word.component.html',
    styleUrls: ['app/components/word/word.component.css'],
    directives: [WordEditComponent],
    pipes: [FilterArrayPipe,YesNoPipe]
})

export class WordComponent implements OnInit {

  words: Word[] = [];
  selectedWord: Word;
  showAll = true;

  constructor (
      private _router: Router,
      private _wordService: WordService,
      private auth: AuthService) {}

  ngOnInit() {
    this.getWords();
  }

  getWords() {
    this._wordService.getWords().subscribe(words => {this.words = words});
  }

  onSelect(word: Word) { 
    this.selectedWord = word;
  }

  toWords() {
    this._router.navigate(['/keywords']);
    location.reload();
  }

  toEdit(wid:string) {
    this._router.navigate(['/keyword/edit', wid]);
  }

  addWord() {
    this._router.navigate(['/keyword/new']);
  }

  removeWord(id:string) {
    this._wordService.deleteWord(id).subscribe();
    location.reload();
  }

  deleteWordPop(id:string) {
    var r = confirm("Are you sure you want to delete this keyword ?");
    if (r == true) {
      this.removeWord(id);
    }
  }

  groupByTag(tag) {
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
  }

  groupByCat(cat) {
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
  }

}




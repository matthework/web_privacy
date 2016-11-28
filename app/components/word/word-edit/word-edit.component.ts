import {Component,OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

import {Word} from '../word';
import {WordService} from '../word.service';

import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'my-word-edit',
  templateUrl: 'app/components/word/word-edit/word-edit.component.html',
  styleUrls: ['app/components/word/word-edit/word-edit.component.css']
})

export class WordEditComponent implements OnInit {

  word: Word;
  active = false;
  sub: any;
  id: string;
  newTag = "";
  wordNet = false;

  constructor(
    private _wordService: WordService, 
    private _router: Router,
    private route: ActivatedRoute,
    private auth: AuthService) {}

  ngOnInit() {
    this.getParams();
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
    this._router.navigate(['/keywords']);
    location.reload();
  }

  toWordDetail() {
    this._router.navigate(['/keyword/detail',this.id]);
    // location.reload();
  }

  updateWord() {
    this.word.name = this.word.name.toUpperCase();
    this.word.category = this.word.category.toUpperCase();
    this.word.tags = this.word.tags.sort();
    let value = JSON.stringify(this.word)
    this._wordService.updateWord(this.id,value).subscribe();
    console.log('you submitted value: ', value); 
    this.toWords();
  }

  addWord() {
    this._router.navigate(['/keyword/new']);
  }

  removeWord() {
    this._wordService.deleteWord(this.id).subscribe();
    this.toWords();
  }

  deleteWordPop() {
    var name = this.word.name
    var r = confirm("Are you sure you want to delete Word: " + name.toUpperCase() +" ?");
    if (r == true) {
      this.removeWord();
    }
  }

  addTag(tag:string) {
    this.word.tags.push(tag.toUpperCase());
    this.newTag = "";
  }

  deleteTag(tag:string) {
    let index = this.word.tags.indexOf(tag);
    this.word.tags.splice(index,1);
  }

  goBack() {
    window.history.back();
  }

}



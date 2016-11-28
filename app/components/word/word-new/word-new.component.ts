import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Word} from '../word';
import {WordService} from '../word.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'my-word-new',
  templateUrl: 'app/components/word/word-new/word-new.component.html',
  styleUrls: ['app/components/word/word-new/word-new.component.css']
})

export class WordNewComponent {

  newWord = {name:"", category:"", tags:[], inused:true, others:[]};
  newTag = "";
  wordNet = false;
  xml = [];

  constructor(
    private _wordService: WordService, 
    private _router: Router,
    private auth: AuthService) {}

  addWord() {
    this.newWord.name = this.newWord.name.toUpperCase();
    this.newWord.category = this.newWord.category.toUpperCase();
    this.newWord.tags = this.newWord.tags.sort();
    let value = JSON.stringify(this.newWord);
    this._wordService.addWord(value).subscribe();
    console.log('you submitted value: ', value); 
    this.toWords();
  }

  toWords() {
    this._router.navigate(['/keywords']);
    location.reload();
  }

  addTag(tag:string) {
    this.newWord.tags.push(tag.toUpperCase());
  }

  deleteTag(tag:string) {
    let index = this.newWord.tags.indexOf(tag);
    this.newWord.tags.splice(index,1);
  }

  goBack() {
    window.history.back();
  }

  getWordNet(w:string) {
    // var parser = require('xml2json');
    // console.log('Word: ', w); 
    this._wordService.getWordNet(w).subscribe((xml) => {this.xml = xml;});
    // var json = xml2json(this.xml); 
    // console.log("to json -> %s", json);
  }
   
}




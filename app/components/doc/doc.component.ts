import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'my-doc',
    templateUrl: 'app/components/doc/doc.component.html',
    styleUrls: ['app/components/doc/doc.component.css'],
})

export class DocComponent {

	input = "";
	url = "";
	showOut = false;
	data = "";

	aa = "<h1>hahahhahahh...</h1>";
	bb = "document.body.style.backgroundColor='lightblue'";

  	constructor (
    	private _router: Router) {}

	modifySourcePage(str:string) {
		console.log('input value: ', str.substring(0, 4));
		if (str.substring(0, 4) != "http") {
			str = "http://" +str;
		}
		this.url = str;
		// window.location.href=this.url;
		console.log('input value: ', this.url);
		this.showOut = true;
	}

    toMain() {
        this._router.navigate(['/doc']);
        // location.reload();
        this.showOut = false;
    }

}

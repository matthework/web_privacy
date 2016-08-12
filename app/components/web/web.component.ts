import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'my-web',
    templateUrl: 'app/components/web/web.component.html',
    styleUrls: ['app/components/web/web.component.css'],
})

export class WebComponent {

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

    // loadXMLDoc(theURL:string) {
    //     if (window.XMLHttpRequest)
    //     {// code for IE7+, Firefox, Chrome, Opera, Safari, SeaMonkey
    //         var xmlhttp=new XMLHttpRequest();
    //     }
    //     else
    //     {// code for IE6, IE5
    //         var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    //     }
    //     xmlhttp.onreadystatechange=function()
    //     {
    //         if (xmlhttp.readyState==4 && xmlhttp.status==200)
    //         {
    //             alert(xmlhttp.responseText);
    //         }
    //     }
    //     xmlhttp.open("GET", theURL, false);
    //     xmlhttp.send();
    // }

    toMain() {
        this._router.navigate(['/web']);
        // location.reload();
        this.showOut = false;
    }

}

import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  // @ViewChild('browser') browser;
  url = {};
  constructor(public navCtrl: NavController) {
  }

  reload(event) {
    // var browser: any = document.getElementById("browser");
    // browser.reload();
    // console.log(this.browser);
    browser.reload();
  }

  submit(event) {
    browser.src = this.url;
  }
}

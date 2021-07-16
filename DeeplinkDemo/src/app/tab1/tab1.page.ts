import { Component } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  myTitle: string = 'Default Title';
  constructor() {
      this.getURL()
  }
  getURL = async () => {
    const { value } = await Storage.get({ key: 'URL' });
    this.myTitle = value
  };

}

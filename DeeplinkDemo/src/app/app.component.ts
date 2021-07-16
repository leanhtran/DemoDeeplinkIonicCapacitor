import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { Storage } from '@capacitor/storage';
const { App } = Plugins;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private zone: NgZone) {
    this.initializeApp();
  }

  initializeApp() {
    App.addListener('appUrlOpen', async(data: any) => {
        this.zone.run(async () => {

          await Storage.set({
            key: 'URL',
            value: data.url,
          });
          console.log("URL", data.url)
        });
    });
}
}



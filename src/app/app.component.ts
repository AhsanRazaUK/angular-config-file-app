import { Component } from '@angular/core';
import { AppConfig } from './shared/app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "app-config";

  constructor() {
    this.title = AppConfig.settings.env.name;
    console.log(AppConfig.settings.apiServer.metadata);
  }

}

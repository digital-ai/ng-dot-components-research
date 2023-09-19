import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  authHeader = "";
  public platformApi = this.authHeader ? "https://api.us.digital.ai" : "https://demo-mock-api";
  public token = this.authHeader ? this.authHeader.substring(7) : "";
}

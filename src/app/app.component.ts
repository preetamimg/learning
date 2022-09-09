import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learning';
  color = 'green'
  colors = [`red`,`green`,`blue`]
  demo = 'hello'
}

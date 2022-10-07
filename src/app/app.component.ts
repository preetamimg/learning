import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Directives';
  serviceList:any [] = [
    {id:1, name: 'preetam1', password: 'passowrd1'},
    {id:2, name: 'preetam2', password: 'passowrd2'},
    {id:3, name: 'preeta3', password: 'passowrd3'},
  ]
}

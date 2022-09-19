import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Template Referance';
  item:string = ''
  getval(val:string){
    console.log(val)
    this.item = val
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'switch case';
  colors = ['red' ,'green', 'blue', 'purple', 'yellow', 'aqua']
  color = 0;
  increase(){
    this.color = this.color >= this.colors.length - 1 ? 0 : this.color + 1
    console.log(this.color)
  }
}

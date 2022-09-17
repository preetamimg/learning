import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Send data from child to parent';
  data:string=''
  updateData(item:string){
    console.warn(item)
    this.data= item
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'for loop';
  user = ['Ajay', 'Deepak' , 'Suresh']
  userdetail = [
    {name:'Ajay' , email:'Ajay@email.com'},
    {name:'Deepak' , email:'Deepak@email.com'},
    {name:'Suresh' , email:'Suresh@email.com'}
  ]
}

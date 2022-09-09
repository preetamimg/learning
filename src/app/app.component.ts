import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nested for loop';
  users = [
    {name:'Ajay' , email:'Ajay@email.com', SocialAccount: ['facebook', 'google', 'yahoo']},
    {name:'Deepak' , email:'Deepak@email.com', SocialAccount: ['facebook1', 'google1', 'yahoo1']},
    {name:'Suresh' , email:'Suresh@email.com', SocialAccount: ['facebook2', 'google2', 'yahoo2']}
  ]
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Reusable Component';
  userDetails = [
    {name: 'preetam', email:'preetam@test.com'},
    {name: 'deepak', email:'deepak@test.com'},
    {name: 'ajay', email:'ajay@test.com'},
    {name: 'suresh', email:'suresh@test.com'},
  ]
}

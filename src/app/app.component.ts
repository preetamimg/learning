import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test API';
  users: any;
  constructor (private user:UserService) {
      this.user.getUser().subscribe((data) =>{
        console.warn(data);
      })
  }
  getUserForm(val:any) {
    this.user.saveUser(val).subscribe((data) =>{})
  }
}

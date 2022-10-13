import { Component } from '@angular/core';
import {UsersDataService} from './services/users-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learning';
  users: any;
  constructor(private userData:UsersDataService) {
    this.userData.users().subscribe((data) =>{
      console.warn(data)
      this.users = data;
    })
  }
  getUserFormData(userVal: any) {
    // console.warn(userVal);
    this.userData.saveUsers(userVal).subscribe((result) =>{
      console.warn(result);
      
    })
    
  }
}

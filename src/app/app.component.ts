import { Component } from '@angular/core';
import {UserdataService} from './services/userdata.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learning';
  user:any [] = [];
  constructor(private userdata:UserdataService) 
  {
    console.warn('userdata', userdata.users());
    this.user = userdata.users()
    
  }
}

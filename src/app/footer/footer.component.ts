import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
 users: any;
  constructor(private userData:UsersDataService) {
    this.userData.users().subscribe((data) =>{
      this.users = data
    })
   }

  ngOnInit(): void {
  }

}

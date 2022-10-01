import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Reactive Form';
  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
  })
  val:any = '';
  getdata() {
    console.log(this.loginForm.value)
    this.val = this.loginForm.value
  }
}


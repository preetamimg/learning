import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Reactive Form';
  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })
  getdata() {
    console.log(this.loginForm.value)
  }
  get user() {
    return this.loginForm.get('user')
  }
  get pass() {
    return this.loginForm.get('password')
  }
}

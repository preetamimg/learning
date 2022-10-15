import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private user:HttpClient) { }
  url= 'http://localhost:3000/posts'
  getUser() {
    return this.user.get(this.url)
  }
  saveUser(val:any) {
    return this.user.post(this.url,val)
  }
}

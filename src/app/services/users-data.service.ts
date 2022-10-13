import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  url="http://localhost:3000/posts"

  constructor(private http:HttpClient) { }
  users() {
    return this.http.get(this.url)
  }
  saveUsers(userVal:any) {
    return this.http.post(this.url,userVal)
  }
}

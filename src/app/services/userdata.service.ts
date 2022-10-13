import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  users() {
    return [
      {name: 'preetam' , age: 24 , email: 'preetam@test.com'},
      {name: 'suresh' , age: 25 , email: 'suresh@test.com'},
      {name: 'deepak' , age: 23 , email: 'deepak@test.com'},
    ]
  }
}

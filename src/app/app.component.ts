import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learning';
  data = ''
  count = 0
  type = 'password'
  disable = true
  hide = true
  myName(name: string,rollNO:number){
    alert(name);
    alert(rollNO);
  };
  getData(val:any){
    console.log(val)
    this.data = val
  };
  counter(name:string){
    name=== 'add' ? this.count++ : this.count--
    if(this.count<0){
      this.count = 0
    }
  };
  show(){
      this.type === 'password' ? this.type = 'text' : this.type = 'password';
  };
  getVal(val1:string){
    console.log(val1)
    val1=== '' ? this.disable = true : this.disable = false
  }
  ifclick(){
    this.hide== true ? this.hide = false : this.hide = true
    console.log(this.hide)
  }
}

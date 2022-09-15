import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TO DO LIST';
  list:any[]= [];
  demo:any [] = ['1', '2' ,'3', '7' ,'8', 'preetam'];
  demo1:any [] = ['4', '5' ,'6'];
  demo3:any [] = [];
  demo4:any = ''
  getdata(item:string){
    this.list.push({id:this.list.length,name:item})
  }
  clearData(newId: Number){
    this.list = this.list.filter(item => item.id > 2)
  }
  pop(){
    this.demo.pop()
    this.demo = this.demo.filter(item=>item.length!==length)
    console.log(this.demo)
  }
  shift(){
    this.demo.shift()
    this.demo = this.demo.filter(item=>item.length!==length)
    console.log(this.demo)
  }
  concat(){
    this.demo3 = this.demo.concat(this.demo1)
    this.demo = this.demo3.filter(item=>item.length!==length)
    console.log(this.demo3)
  }
  join(){
    this.demo4 = this.demo.join('and')
    this.demo = this.demo4
    console.log(this.demo4)
  }
  slice(){
    this.demo3 = this.demo.slice(2,4) 
    this.demo = this.demo3
    console.log(this.demo3)
  }
  
  indexOf(){
    this.demo4 = this.demo.indexOf('preetam')
    // this.demo = this.demo4
    console.log(this.demo4)
  }
}

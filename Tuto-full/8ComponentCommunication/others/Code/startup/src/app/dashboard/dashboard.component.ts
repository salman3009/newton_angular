import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  fullName:string="hello world";

  age:number=24;
  changing:any="data";
  flag:boolean=false;
  emailAddress:string="salman444@gmail.com";
  imgTag:string="./assets/data2.jpeg"
  welcomeFlag:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit()
  {
    debugger;
    this.flag=true;
    alert("hello world");
  }

}

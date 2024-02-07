import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  flag:boolean=false;
  constructor() { }

  ngOnInit() {
    debugger
  let data=localStorage.getItem("token");
  console.log(data);
  }

  onLoginSubmit(form: NgForm) {
    debugger;
   
    if (form.invalid) {

       console.log("error");
    }

    console.log("he");
    console.log(form.value.username);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import {CanComponentDeactivate} from '../deactive.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,CanComponentDeactivate {

  debugger;
  public flag:boolean=false;
  public canLeave:boolean=false;
  public emailTwoWay:string="salman";
  public errorData:string="invalid email";
  constructor(  public router:Router) { }

  ngOnInit(): void {
  this.canLeave=false;
  }
  

  onSubmit(form: NgForm){
    debugger
    this.router.navigate(['/auth/register']);

    if (form.invalid) {
      this.flag=true;
      alert("error");
      return;
    }
    console.log(form.value.name);
    this.flag=false;
    
  }
}

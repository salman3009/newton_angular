import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userEmail:string="@gmail.com";
  public userPassword:string;
  public errorMessage:string;
  public erroStatus:boolean=false;
  constructor(public router:Router) { }

  ngOnInit(): void {
 
  }

  onSubmit(){
    if(this.userEmail==undefined || this.userEmail == null || this.userEmail =='' || this.userEmail =='@gmail.com')
    {
    this.erroStatus=true;
    this.errorMessage="Please provide email id";
    return;
    }
    if(this.userPassword==undefined || this.userPassword == null || this.userPassword =='')
    {
    this.erroStatus=true;
    this.errorMessage="Please provide password";
    return;
    }
    if(this.userEmail!="salman444@gmail.com" || this.userPassword!="12345"){
    this.erroStatus=true;
    this.errorMessage="Invalid credentials";
    return;
    }
    alert("successfull");
    this.router.navigate(['/create-profile']);
  }
}

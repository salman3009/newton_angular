import { Component, OnInit } from '@angular/core';


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
  constructor() { }

  ngOnInit(): void {
 
  }

  onSubmit(){
    if(this.userEmail==undefined || this.userEmail == null || this.userEmail =='' || this.userEmail =='@gmail.com')
    {
    this.erroStatus=true;
    this.errorMessage="Please provide email id";
    return false;
    }
    if(this.userPassword==undefined || this.userPassword == null || this.userPassword =='')
    {
    this.erroStatus=true;
    this.errorMessage="Please provide password";
    return false;
    }
    if(this.userEmail=="salman444g@gmail.com" && this.userPassword=="12345"){
    this.erroStatus=true;
    this.errorMessage="Invalid credentials";
    return true;
    }
    else{
      return false;
    }
  }
}

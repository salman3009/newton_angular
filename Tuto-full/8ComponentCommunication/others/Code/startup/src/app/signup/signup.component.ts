import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      firstName:new FormControl(null,[Validators.required, Validators.minLength(2)]),
      email: new FormControl(null,[ Validators.required, Validators.email]),
      mobile: new FormControl(null,[Validators.required, Validators.pattern(/^[789]\d{9}$/)]),
    });
  }


  onSubmitClick()
  {
    debugger;
    this.signUpForm["submitt"] = true;
    //this.loginForm.invalid
    //Display current form value
    if(this.signUpForm.invalid)
    {
      return;
    }
   
    console.log(this.signUpForm.value.firstName);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import {HttpRequestService} from '../http-request.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public registerForm:FormGroup;
  public unamePattern:any;
  public developerList:any;
  constructor(public FormBuilder:FormBuilder,public http:HttpRequestService) {
    this.unamePattern = "^[a-z0-9_-]{8,15}$";
    this.registerForm=this.FormBuilder.group({
      profession:['',Validators.required],
      company:['',[Validators.pattern(this.unamePattern),Validators.required,Validators.minLength(6),Validators.maxLength(12)]]
    })
   }

  ngOnInit(): void {
    this.http.getDeveloperList().subscribe((success)=>{
      this.developerList=success;
      console.log(this.developerList);
    })
  }

  get f() { return this.registerForm.controls; }

  onSubmitHandler():void{
    console.log(this.registerForm.value);
  }


}

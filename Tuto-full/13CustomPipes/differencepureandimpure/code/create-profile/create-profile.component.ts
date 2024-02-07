import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  public data:string="IN";
  public show:boolean=false;
  public searchTerm:string='';
  public users:any[]=[{
    name:"salman" 
  },{name:"akash"},{name:"potter"}];
  public developerLIst:any[]=[
    "Developer","Junior Developer","Senior Developer"
  ]
  constructor() { }

  ngOnInit(): void {
  }

  changeProperty(){
   this.users.push({name:"master"})
  }
  onChangeHandler(){
    alert("hello");
    this.show=true;
  }

  onChangePipeHander(){
    this.data='ddd';    
  }

}

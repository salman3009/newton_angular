import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  public data:string="IN";
  public show:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  onChangeHandler(){
    alert("hello");
    this.show=true;
  }

}

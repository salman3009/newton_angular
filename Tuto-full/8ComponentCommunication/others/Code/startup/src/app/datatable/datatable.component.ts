import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  Contact:string="CONTACT";
  firstName:string;
  dietSelection:string='sf';
  emailAddress:string;
  contact:string;
  globalIndex:number;
  flag:boolean=false;
  globalData:any[]=[
    {
      firstName:"salman",
      contact:982323232,
      email:"salman.g@gmail.com"
    },
    {
      firstName:"rakesh",
      contact:982323232,
      email:"rakest.g@gmail.com"
    },
    {
      firstName:"salim",
      contact:982323232,
      email:"salim.g@gmail.com"
    },
    {
      firstName:"potter",
      contact:982323232,
      email:"potter.g@gmail.com"
    },
  ];
  constructor(public obj:CommonService) {
    
   }

  ngOnInit() {
    debugger;
    console.log(this.obj.checkingId);
    this.obj.checkingId=555;
    this.obj.getAllData().subscribe((response)=>{
    console.log(response.posts);
    },(error)=>{
      console.log(error);
    },()=>{

    })   
  }

  onSubmit()
  {
    debugger;
    if(this.flag)
    {
      this.updateSubmit();
      return;
    }
    this.globalData.push({
      firstName:this.firstName,
      contact:this.contact,
      email:this.emailAddress
    });
    this.firstName='';
    this.contact='';
    this.emailAddress='';

  }

  updateSubmit()
  {
    this.globalData[this.globalIndex].firstName=this.firstName;
    this.globalData[this.globalIndex].contact=this.contact;
    this.globalData[this.globalIndex].email=this.emailAddress;
    this.flag=false;
  }
  onDelete(n){
  this.globalData.splice(n,1);
  }

  onUpdate(n)
  {
    this.flag=true;
    this.globalIndex=n;
    this.firstName=this.globalData[n].firstName;
    this.contact=this.globalData[n].contact;
    this.emailAddress=this.globalData[n].email;
  }
}

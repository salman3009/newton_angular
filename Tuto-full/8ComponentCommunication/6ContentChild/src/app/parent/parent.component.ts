import { Component, OnInit,ViewChild } from '@angular/core';
import {ChildComponent} from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public fullName="salman";
  public status:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }


  @ViewChild("prj") prj:ChildComponent;
  onParentShow(){
    debugger;
    alert("on parent");
    this.prj.getDetails();
    this.prj.isAllcheckedChanges(this.status)
    console.log(this.prj.age);
    this.prj.age=67;
  }

  @ViewChild("prj") prjd:ChildComponent;
  onParentShowData(){
    console.log(this.prjd.age);

  }


}

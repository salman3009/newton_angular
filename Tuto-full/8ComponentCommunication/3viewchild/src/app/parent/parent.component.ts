import { Component, OnInit,ViewChild } from '@angular/core';
import {ChildComponent} from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public fullName="salman";
  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild("prj") prj:ChildComponent;
  onParentShow(){
    alert("on parent");
    this.prj.getDetails();
    console.log(this.prj.age);
  }
}

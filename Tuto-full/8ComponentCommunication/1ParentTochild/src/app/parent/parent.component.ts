import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public fullName="salman";
  public ProjectDetails=[{
   name:"E commerce",
   timeline:"2 months"
  },
  {
    name:"Banking",
    timeline:"2 months"
   },
   {
    name:"Petrol management",
    timeline:"2 months"
   }]
  constructor() { }

  ngOnInit(): void {
  }

}

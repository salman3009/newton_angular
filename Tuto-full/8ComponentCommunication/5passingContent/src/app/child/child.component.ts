import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input("nameDetails")nameDetails:any;
  public age:number=23;
  constructor() { }

  ngOnInit(): void {
  }

  getDetails(){
    alert("age");
  }


}

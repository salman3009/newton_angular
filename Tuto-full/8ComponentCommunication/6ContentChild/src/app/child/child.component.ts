import { Component, OnInit , Input,ContentChild } from '@angular/core';
import { GrandchildComponent } from '../grandchild/grandchild.component';

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

    // passing from child to grandchild 
@ContentChild("selectionbox") selectionbox:GrandchildComponent;
 
isAllcheckedChanges(b:any)
{
  debugger;
  if(b)
  {
    this.selectionbox.check();
  }
  else{
    this.selectionbox.uncheck();
  }
}
 


}

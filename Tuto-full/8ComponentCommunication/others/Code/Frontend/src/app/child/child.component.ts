import { Component, OnInit, Input,Output,EventEmitter, ContentChild, SimpleChange, ViewChild, ElementRef } from '@angular/core';
import { GrandchildComponent } from '../grandchild/grandchild.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  //Parent to child child-input binding 
  @Input("projectData")project:any[];
  @Input("recordIndex")index:number;
   




  constructor() { }

  ngOnInit() {
  //  console.log("ngONINit");
  }
  
  ngOnChanges(simplechanges:SimpleChange): void {
   // console.log("ngonchanges")
    for(let propName in simplechanges)
    {
      let chng = simplechanges[propName];
      let cur=JSON.stringify(chng.currentValue);
      let prev=JSON.stringify(chng.previousValue);
    //  console.log(`${propName}:currentvalue=${cur}previousvalue=${prev}`);
      // if(simplechanges["project"])
      // {
      //  console.log (chng.currentValue.id+=2);
      // }
    }


    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
  }

  ngDoCheck(): void {
     //console.log("ngDoCheck");
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    // console.log("ngAfterContentInit");
    // console.log(this.selectionbox);
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
     //console.log(this.selectionbox);
  }

  ngAfterViewInit(): void {
    // console.log(this.tbl);
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // console.log("ngAfterViewInit");
  }
  @ViewChild("tbl")tbl:ElementRef;
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
     //console.log("ngAfterViewChecked");
  }
  //child to parent - output binding custom events
  @Output() editClick = new EventEmitter();
  onEditClick(event,i)
  {
    alert("child component");
    console.log("child component");
    this.editClick.emit({event,i});
  }

  //parent to child - view child/view children
  hideDetails:boolean = true ;
  toggleDetails()
  {
    this.hideDetails=!this.hideDetails;
  }
  
  // passing from child to grandchild 
@ContentChild("selectionbox") selectionbox:GrandchildComponent;
 
isAllcheckedChanges(b:boolean)
{
  if(b)
  {
    this.selectionbox.check();
  }
  else{
    this.selectionbox.uncheck();
  }
}
 
}

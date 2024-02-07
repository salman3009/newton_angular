import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  projectDetails:any[]=[
    {
      id:1,
      name:"Airlines"
    },
    {
      id:2,
      name:"Emirates"
    },{
      id:3,
      name:"UK"
    }

  ];
  people:number=323;
  clientLocation:Observable<any>;
  constructor() { }

  ngOnInit() {
    //async pipe
    this.clientLocation = new Observable(observer => {
      setTimeout(() => {
        let data = [1,2,3,4,99];  
        observer.next(data);
          observer.complete();
      }, 4000);
});
  }


   //child to parent - output binding custom events
   onEditClick(event,i)
  {
    alert(i);
    alert("parent component");
    console.log("parent component");

  }

  //parent to child - viewchild
  // @ViewChild("prj") prj:ChildComponent;
  // onHideShowDetails(event)
  // {
  //   this.prj.toggleDetails();
  // }

    //parent to child - viewchildren
  // @ViewChildren("prj") prj:QueryList<ChildComponent>;
  // onHideShowDetails(event)
  // {
  //   let projs=this.prj.toArray();
  //   for(let i=0;i<projs.length;i++)
  //   { 
  //      projs[i].toggleDetails();
  //   }
    
  // }

  //passing from child to grandchild 
isAllchecked:boolean=false;
@ViewChildren("prj") prj:QueryList<ChildComponent>;
 isAllcheckedChange(event)
  {
    let projs=this.prj.toArray();
    for(let i=0;i<projs.length;i++)
    { 
       projs[i].isAllcheckedChanges(this.isAllchecked);
    }
}

//elmenetref
// @ViewChild("prj")prf:ElementRef;
// elementref()
// {
//   this.prf.nativeElement.focus();
// }
}

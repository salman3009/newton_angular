import { Directive,ViewContainerRef,TemplateRef } from '@angular/core';

@Directive({
  selector: '[appRepeater]'
})
export class RepeaterDirective {

  constructor(private viewContainerRef:ViewContainerRef,private templateRef:TemplateRef<any>) {
    this.viewContainerRef.clear();
   }
   ngOnInit(): void {
     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
     //Add 'implements OnInit' to the class.
     for(let i=0;i<5;i++)
     {
       this.viewContainerRef.createEmbeddedView(this.templateRef,{$implicit:i});
     }
   }

}

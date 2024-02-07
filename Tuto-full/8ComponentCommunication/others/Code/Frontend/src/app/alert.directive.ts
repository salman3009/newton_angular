import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appAlert]'
})
export class AlertDirective {

  constructor(private elementRef:ElementRef) {

   }
   ngOnInit(): void {
     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
     //Add 'implements OnInit' to the class.
     this.elementRef.nativeElement.innerHTML=`
     <div class="alert alert-danger fade show" roles="alert">
     <span>Welcome</span>
     </div>`;
     
   }

}

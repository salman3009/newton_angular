import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlert]'
})
export class AlertDirective
{
  @Input("error") error: string;
  
  constructor(private elementRef: ElementRef)
  {
  }

  ngOnInit()
  {
    this.elementRef.nativeElement.innerHTML = `
      <div class="alert alert-danger fade show" role="alert" style="transition: transform 0.5s">
        <span>${this.error}</span>
      </div>
    `;
  }

  @HostListener("mouseenter", [ "$event" ])
  onMouseEnter(event)
  {
    this.elementRef.nativeElement.querySelector(".alert").style.transform = "scale(1.1)";
  }

  @HostListener("mouseleave", [ "$event" ])
  onMouseLeave()
  {
    this.elementRef.nativeElement.querySelector(".alert").style.transform = "scale(1)";
  }
}


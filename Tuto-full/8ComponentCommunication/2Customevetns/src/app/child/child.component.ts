import { Component, OnInit , Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input("nameDetails")nameDetails:any;
  @Input("projectDetails")projectDetails:any;
  constructor() { }

  ngOnInit(): void {
  }

  @Output() editClick = new EventEmitter();
  onShow(){
    alert("onChild");
    this.editClick.emit(4)                                                                                                                                                                            
  }
}

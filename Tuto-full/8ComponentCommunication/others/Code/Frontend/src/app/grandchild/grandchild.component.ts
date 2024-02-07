import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent implements OnInit {

  ischecked:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  check()
  {
    this.ischecked=true;
  }
  uncheck()
  {
    this.ischecked=false;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {

  public data=345;
  public todayDate = new Date();
  public developerName:any={
    fullName:"salman"
  }

  constructor() { }

  ngOnInit(): void {
  }

}

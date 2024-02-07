import { Component, OnInit } from '@angular/core';
import {GlobalProfileService} from '../global-profile.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-list-section',
  templateUrl: './list-section.component.html',
  styleUrls: ['./list-section.component.css']
})
export class ListSectionComponent implements OnInit {

  public developerList:any[]=[];
  public year=2020;
  constructor(public Router:Router,public global:GlobalProfileService) { 
      this.developerList=global.developerList
  }

  ngOnInit(): void {
  }

  onViewProfile(i){
    this.global.index=i;
    this.Router.navigate(['/detailed-profile']);
  }
}

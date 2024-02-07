import { Component, OnInit } from '@angular/core';
import {GlobalProfileService} from '../global-profile.service';
@Component({
  selector: 'app-detailed-profile',
  templateUrl: './detailed-profile.component.html',
  styleUrls: ['./detailed-profile.component.css']
})
export class DetailedProfileComponent implements OnInit {

  public globalProfile:any=[];
  constructor(public global:GlobalProfileService) {
   this.globalProfile=this.global.developerList[this.global.index];
   console.log(this.globalProfile);
   }

  ngOnInit(): void {
  }

}

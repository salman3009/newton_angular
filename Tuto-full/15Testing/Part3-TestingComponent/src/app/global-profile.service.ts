import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalProfileService {

public developerList:any[]=[];
public index:number=-1; 
  constructor() {
    this.developerList=[
      {
        imagePath:'../../assets/Image/download.png',
        name:"Salman",
        occupation:"Developer at Microsoft",
        location:"New York,USA",
        skills:['Angular','Nodejs','Reactjs']

      },
      {
        imagePath:'../../assets/Image/download.png',
        name:"Akash",
        occupation:"Developer at cisco",
        location:"New York,USA",
        skills:['Angular','Nodejs','javascript','tpyscript']

      }
    ]
   }
}

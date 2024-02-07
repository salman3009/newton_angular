import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  imgTag:string="./assets/data3.png";
  width:number=600;
  height:number=200;
  carName:string="BMW";
  flag:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  selectionCar()
  { 
    if(this.carName=="data2" || this.carName=="data3")
    {
      this.flag=true;
      this.imgTag="./assets/"+this.carName+".jpeg";
    }
    else{
      this.flag=false;
      this.imgTag="./assets/data3.png";
    }

  }
}

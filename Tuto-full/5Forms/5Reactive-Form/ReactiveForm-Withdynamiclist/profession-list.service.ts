import { Injectable } from '@angular/core';
import { Profession } from './profession';
@Injectable({
  providedIn: 'root'
})
export class ProfessionListService {

  public dataDetails:any;
  constructor() { }

  getProfessionList():Profession[]{
    return[
      new Profession('D','Developer'),
      new Profession('S','Senior Developer'),
      new Profession('M','Manager')
    ]
  }
}

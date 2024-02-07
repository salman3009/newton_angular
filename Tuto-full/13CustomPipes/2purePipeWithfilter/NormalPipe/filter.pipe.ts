import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any): any {
    if(value=="IN"){
      return "India";
    }
    else if(value.includes("Developer")){
    return value.replace('Developer','Specialist');
    }
    else{
      return "world"
    }
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  checkingId:number=45;
  constructor(public http:HttpClient) { }

   getAllData()
{
  debugger;
   return this.http.get<{posts:any[],message:string}>("http://localhost:3000/api/posts");
}

}

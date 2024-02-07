import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { debugOutputAstAsTypeScript } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  adminFlag:boolean=false;

  constructor(public http:HttpClient) {

   }

   getBookingData()
   {
     return this.http.get<{posts:any[]}>("http://localhost:3000/api/posts");
   }

   postBookingData(firstName,lastName,email)
   {
     debugger;
     const post={
       firstName:firstName,
       lastName:lastName,
       emailId:email
     }
     return this.http.post<{message:string,post:any[]}>("http://localhost:3000/api/posts",post);  
   }

   deleteBookingData(id)
   {
     return this.http.delete<{message:string}>("http://localhost:3000/api/posts/"+id);
   }

   signupBookingData(post)
   {
     debugger;
     return this.http.post<{message:string,post:any[]}>("http://localhost:3000/api/posts",post);
     
   }
}

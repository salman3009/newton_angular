import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Post} from "./post";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(public http: HttpClient) { }
  dd:any;
  arr:Post[]=[];


  postBookingDetails(tempData) {
    const post={firstName:tempData.firstName,lastName:tempData.lastName,emailId:tempData.emailId};
    return this.http.post<{message:string,data:any[]}>(
      "http://localhost:3000/api/posts",post
    )
  }
  getBookingDetails() {
    localStorage.setItem("token","salman");
        return this.http.get<{posts:any}>(
      "http://localhost:3000/api/posts"
    )
  }

  deleteBookingDetails(id) {
    return this.http.delete<{message:string,posts:any[]}>(
  "http://localhost:3000/api/posts/"+id
)
}
   updateBookingDetails(data,id){
     const postData={_id:id,firstName:data.firstName,lastName:data.lastName,emailId:data.emailId};
    return this.http.put<{message:string,posts:any[]}>(
      "http://localhost:3000/api/posts/"+id,postData
    )
   }

}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(public http:HttpClient) {

   }

   postLoginDetials(object){
     return this.http.post('https://jsonplaceholder.typicode.com/postsss',object);
   }

   
   getDeveloperList(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}

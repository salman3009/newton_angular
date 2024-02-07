import { Injectable } from '@angular/core';
import{HttpInterceptor,HttpRequest,HttpHandler,HttpEvent} from "@angular/common/http";
import{Observable}from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SampleInterceptorService implements HttpInterceptor {

  intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>
  {
    //HttpRequest is the request send to the server
    request = request.clone({setHeaders:{"mykey":"100"}});
    //"clone()" means one more copy of that request.
    return next.handle(request);

  }
  
  constructor() { }
}

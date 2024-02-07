import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler
  } from "@angular/common/http";
  import { Injectable } from "@angular/core";
  
  
  @Injectable()
  export class Intercepto implements HttpInterceptor {
    constructor() {}
  
    intercept(req: HttpRequest<any>, next: HttpHandler) {
      debugger;
      

      
      req  = req.clone({
        headers: req.headers.set("Authorization", "Bearer ")
      });
  

      return next.handle(req);
    }
  }
  
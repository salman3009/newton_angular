import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import {CommonService} from './common.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(public obj:CommonService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    debugger;
    

    
    req  = req.clone({
      headers: req.headers.set("Authorization", "Bearer "+this.obj.adminFlag)
    });


    return next.handle(req);
  }
}

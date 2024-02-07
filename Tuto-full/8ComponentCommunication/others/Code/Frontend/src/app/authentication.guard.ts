import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import { Observable } from 'rxjs';
import {CommonService} from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(public CommonService:CommonService,public router:Router)
  {

  }
  canActivate(
  ): boolean {
    debugger;
    const isAuth = true;
    if (!isAuth) {
      this.router.navigate(['/login']);
    }
    return isAuth;
  }
}

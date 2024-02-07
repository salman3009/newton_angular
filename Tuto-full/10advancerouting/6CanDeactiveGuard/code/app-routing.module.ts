import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailedProfileComponent } from './detailed-profile/detailed-profile.component';
import {CanActiveService} from './can-active.service';
import {DeactiveService} from './deactive.service';
const routes: Routes = [
  {path:"",component:LandingComponent},
  {path:"employee",children:[
    {path:"profile",component:ProfileComponent},
    {path:"profile/detail/:id",component:DetailedProfileComponent,canActivate:[CanActiveService]}
  ]},
  {path:"auth/register",component:RegisterComponent},
  {path:"auth/login",component:LoginComponent,canDeactivate:[DeactiveService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

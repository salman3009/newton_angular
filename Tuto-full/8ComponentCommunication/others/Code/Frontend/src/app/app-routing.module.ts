import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DataTableComponent } from './data-table/data-table.component';
  import { DashboardComponent } from './dashboard/dashboard.component';
  import {AuthenticationGuard} from './authentication.guard';

const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"dataTable",component:DataTableComponent,canActivate:[AuthenticationGuard]},
  {path:"card",loadChildren:'./card/card.module#CardModule'},
  {path:"finance",loadChildren:'./finance/finance.module#FinanceModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreditComponent} from './credit/credit.component';
import { DebitComponent } from './debit/debit.component';


const routes: Routes = [
  {path:"credit",component:CreditComponent},
  {path:"debit",component:DebitComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }

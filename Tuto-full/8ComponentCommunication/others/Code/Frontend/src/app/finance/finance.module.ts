import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SavingsComponent} from './savings/savings.component';
import {RoutingModule}from './routing.module';
import { CurrentComponent } from './current/current.component';
@NgModule({
  declarations: [
    SavingsComponent,
    CurrentComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class FinanceModule { }

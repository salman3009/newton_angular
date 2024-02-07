import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditComponent } from './credit/credit.component';
import { DebitComponent } from './debit/debit.component';
import {RoutingModule } from './routing.module';
import {CardService} from './card.service';

@NgModule({
  declarations: [CreditComponent, DebitComponent],
  imports: [
    CommonModule,
    RoutingModule
  ],
  providers:[
    CardService
  ]
})
export class CardModule { }

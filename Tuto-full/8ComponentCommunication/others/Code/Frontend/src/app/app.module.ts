import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DataTableComponent } from './data-table/data-table.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DashboardService } from "./dashboard.service";
import { HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http";
import { Intercepto } from "./intercepto";
import {CommonService} from "./common.service";
import {InterceptorService} from "./interceptor.service";
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GrandchildComponent } from './grandchild/grandchild.component';
import { NumberToWordsPipe } from './number-to-words.pipe';
import { AlertDirective } from './alert.directive';
import { RepeaterDirective } from './repeater.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    DataTableComponent,
    ParentComponent,
    ChildComponent,
    GrandchildComponent,
    NumberToWordsPipe,
    AlertDirective,
    RepeaterDirective,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CommonService,DashboardService,{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
  
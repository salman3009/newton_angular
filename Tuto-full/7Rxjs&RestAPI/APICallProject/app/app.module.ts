import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { DeveloperComponent } from './developer/developer.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import { ListComponent } from './developer/list/list.component';
import { ContentListComponent } from './developer/content-list/content-list.component';
import { FullFormPipe } from './full-form.pipe';
import { FilterPipe } from './filter.pipe';
import { DetailedProfileComponent } from './developer/detailed-profile/detailed-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    DeveloperComponent,
    ProfileComponent,
    ListComponent,
    ContentListComponent,
    FullFormPipe,
    FilterPipe,
    DetailedProfileComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

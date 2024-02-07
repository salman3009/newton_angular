import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { ListSectionComponent } from './list-section/list-section.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DevelopersComponent } from './developers/developers.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { DetailedProfileComponent } from './detailed-profile/detailed-profile.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    MainSectionComponent,
    ListSectionComponent,
    RegisterComponent,
    LoginComponent,
    DevelopersComponent,
    CreateProfileComponent,
    DetailedProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DevelopersComponent } from './developers/developers.component';
import { SectionComponent } from './section/section.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { DetailedProfileComponent } from './detailed-profile/detailed-profile.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DevelopersComponent},
  {path:'landing',component:SectionComponent},
  {path:'create-profile',component:CreateProfileComponent},
  {path:'detailed-profile',component:DetailedProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

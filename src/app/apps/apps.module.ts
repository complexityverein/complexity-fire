import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent, 
    RegisterComponent, 
    ProfileComponent, 
    LoginComponent, 
    SettingsComponent
  ],
  exports: [ 
    HomeComponent,
    RegisterComponent,
    ProfileComponent,
    LoginComponent,
    SettingsComponent
  ]
})
export class AppsModule { }

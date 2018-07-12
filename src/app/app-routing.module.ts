import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './apps/components/home/home.component';
import { RegisterComponent } from './apps/components/register/register.component';
import { LoginComponent } from './apps/components/login/login.component';
import { ProfileComponent } from './apps/components/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}


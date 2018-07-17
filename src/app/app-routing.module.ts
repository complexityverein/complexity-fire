import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth.guard';
import { UserLoginComponent } from './ui/user-login/user-login.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { NotesListComponent } from './apps/output/notes-list/notes-list.component';
import { LoroInputComponent } from './apps/input/loro-input/loro-input.component';



const routes: Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: 'loro', component: LoroInputComponent,  canActivate: [AuthGuard] },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

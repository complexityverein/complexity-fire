import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { Store }        from '@ngrx/store';
import { Observable }   from 'rxjs';

import { User }         from '../../../store/models/privuser.model';
import * as userActions from '../../../store/actions/privuser.actions';
interface AppState {
  user: User;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  user$: Observable<User>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.user$ = this.store.select('user');

    this.store.dispatch(new userActions.GetUser());
  }

  googleLogin() {
    this.store.dispatch(new userActions.GoogleLogin());
  }

  logout() {
    this.store.dispatch(new userActions.Logout());
  }


}
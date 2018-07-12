import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { User } from '../models/user.model';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { Observable } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';




import * as userActions from '../actions/user.actions';
export type Action = userActions.All;


@Injectable()
export class UserEffects {

    constructor(private actions: Actions, private afAuth: AngularFireAuth) { }

    @Effect()
    getUser: Observable<Action> = this.actions.ofType(userActions.GET_USER)

        .pipe(map((action: userActions.GetUser) => action.payload))
        .pipe(switchMap(payload => this.afAuth.authState))
        .pipe(map(authData => {
            if (authData) {
                /// User logged in
                const user = new User(authData.uid, authData.displayName);
                return new userActions.Authenticated(user);
            } else {
                /// User not logged in
                return new userActions.NotAuthenticated();
            }

        }))
        .pipe(catchError(err => of(new userActions.AuthError())));

    @Effect()
    login: Observable<Action> = this.actions.ofType(userActions.GOOGLE_LOGIN)

        .pipe(map((action: userActions.GoogleLogin) => action.payload))
        .pipe(switchMap(payload => {
            return from(this.googleLogin());
        }))
        .pipe(map(credential => {
            // successful login
            return new userActions.GetUser();
        }))
        .pipe(catchError(err => {
            return of(new userActions.AuthError({ error: err.message }));
        }));


    private googleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        return this.afAuth.auth.signInWithPopup(provider);
    }

    @Effect()
    logout: Observable<Action> = this.actions.ofType(userActions.LOGOUT)

        .pipe(map((action: userActions.Logout) => action.payload))
        .pipe(switchMap(payload => {
            return of(this.afAuth.auth.signOut());
        }))
        .pipe(map(authData => {
            return new userActions.NotAuthenticated();
        }))
        .pipe(catchError(err => of(new userActions.AuthError({ error: err.message }))));
}
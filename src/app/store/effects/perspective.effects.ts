import { map, switchMap } from 'rxjs/operators';
import { from } from 'rxjs';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Perspective }  from '../models/perspective.model';

import * as actions from '../actions/perspective.actions';
import * as fromPerspective from '../reducers/perspective.reducer';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class PerspectiveEffects {

  // Listen for the 'QUERY' action, must be the first effect you trigger

  @Effect() query$: Observable<Action> = this.actions$.ofType(actions.QUERY)
    .pipe(switchMap(action => {
        const ref = this.afs.collection<Perspective>('perspectives')
        return ref.snapshotChanges().pipe(map(arr => { 
            return arr.map( doc => { 
                const data = doc.payload.doc.data()
                return { id: doc.payload.doc.id, ...data } as Perspective
            })
        }))
    }))
    .pipe(map(arr => { 
        console.log(arr)
        return new actions.AddAll(arr)
    }))

    // Listen for the 'CREATE' action

    @Effect() create$: Observable<Action> = this.actions$.ofType(actions.CREATE)
        .pipe(map((action: actions.Create) => action.perspective ))
        .pipe(switchMap(perspective => {
            const ref = this.afs.doc<Perspective>(`perspectives/${perspective.id}`)
            return from( ref.set(perspective) )
        }))
        .pipe(map(() => {
            return new actions.Success()
        }))
    
    // Listen for the 'UPDATE' action

    @Effect() update$: Observable<Action> = this.actions$.ofType(actions.UPDATE)
        .pipe(map((action: actions.Update) => action))
        .pipe(switchMap(data => {
            const ref = this.afs.doc<Perspective>(`perspectives/${data.id}`)
            return from( ref.update(data.changes) )
        }))
        .pipe(map(() => {
            return new actions.Success()
        }))

    // Listen for the 'DELETE' action       
    
    @Effect() delete$: Observable<Action> = this.actions$.ofType(actions.DELETE)
        .pipe(map((action: actions.Delete) => action.id ))
        .pipe(switchMap(id => {
            const ref = this.afs.doc<Perspective>(`perspectives/${id}`)
            return from( ref.delete() )
        }))
        .pipe(map(() => {
            return new actions.Success()
        }))
    
    constructor(private actions$: Actions, private afs: AngularFirestore) { }    
}
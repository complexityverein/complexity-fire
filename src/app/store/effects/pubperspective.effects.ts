import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';


import * as pubperspectiveActions from './../actions/pubperspective.actions';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { switchMap, mergeMap, map } from 'rxjs/operators';
import { Pubperspective } from '../models/pubperspective.model';

@Injectable()
export class PubperspectiveEffects {



    @Effect()
    query$: Observable<Action> = this.actions$.ofType(pubperspectiveActions.QUERY).pipe(
        switchMap(action => {
            console.log(action)
            return this.afs.collection<Pubperspective>('pubperspectives', ref => ref.where('status', '==', 'cooking')).stateChanges()
        }),
        mergeMap(actions => actions),
        map(action => {
            return {
                type: `[Pubperspective] ${action.type}`,
                payload: { id: action.payload.doc.id, ...action.payload.doc.data() }
            };
        })
    );



    @Effect()
    update$: Observable<Action> = this.actions$.ofType(pubperspectiveActions.UPDATE).pipe(
        map((action: pubperspectiveActions.Update) => action),
        switchMap(data => {
            const ref = this.afs.doc<Pubperspective>(`pubperspectives/${data.id}`)
            return from(ref.update(data.changes))
        }),
        map(() => new pubperspectiveActions.Success())
    )

    constructor(private actions$: Actions, private afs: AngularFirestore) { }
}
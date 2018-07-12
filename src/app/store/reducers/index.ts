import { ActionReducerMap } from '@ngrx/store';
import { pubperspectiveReducer } from './pubperspective.reducer';
import { userReducer } from './privuser.reducer';

export const reducers: ActionReducerMap<any> = {
    user: userReducer,
    pubperspective: pubperspectiveReducer
};
import { ActionReducerMap } from '@ngrx/store';
import { perspectiveReducer } from './perspective.reducer';
import { userReducer } from './user.reducer';

export const reducers: ActionReducerMap<any> = {
    user: userReducer,
    perspective: perspectiveReducer
};
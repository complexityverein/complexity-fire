import * as actions from './../actions/pubperspective.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import { Pubperspective } from '../models/pubperspective.model';

// Main data interface



// Entity adapter
export const pubperspectiveAdapter = createEntityAdapter<Pubperspective>();
export interface State extends EntityState<Pubperspective> { }


export const initialState: State = pubperspectiveAdapter.getInitialState();

// Reducer

export function pubperspectiveReducer(
    state: State = initialState,
    action: actions.PubperspectiveActions) {

    switch (action.type) {

        case actions.ADDED:
            return pubperspectiveAdapter.addOne(action.payload, state)
    
        case actions.MODIFIED:
            return pubperspectiveAdapter.updateOne({ 
                id: action.payload.id, 
                changes: action.payload 
            }, state)
    
        case actions.REMOVED:
            return pubperspectiveAdapter.removeOne(action.payload.id, state)
        
        default:
            return state;
    }

}

// Create the default selectors

export const getpubperspectiveState = createFeatureSelector<State>('pubperspective');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
  } = pubperspectiveAdapter.getSelectors(getpubperspectiveState);
import * as actions from '../actions/perspective.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import { Perspective } from '../models/perspective.model';

// Main data interface



// Entity adapter
export const perspectiveAdapter = createEntityAdapter<Perspective>();
export interface State extends EntityState<Perspective> { }

export const initialState: State = perspectiveAdapter.getInitialState();

// Reducer

export function perspectiveReducer(
    state: State = initialState,
    action: actions.PerspectiveActions) {

    switch (action.type) {

        case actions.ADD_ALL:
            return perspectiveAdapter.addAll(action.perspectives, state);
        
        default:
            return state;
        }

}

// Create the default selectors

export const getPerspectiveState = createFeatureSelector<State>('perspective');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
  } = perspectiveAdapter.getSelectors(getPerspectiveState);
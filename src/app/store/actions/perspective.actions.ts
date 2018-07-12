import { Action } from '@ngrx/store';
import { Perspective }  from '../models/perspective.model';

export const CREATE     = '[Perspectives] Create'
export const UPDATE     = '[Perspectives] Update'
export const DELETE     = '[Perspectives] Delete'

export const QUERY      = '[Perspectives] Query'
export const ADD_ALL    = '[Perspectives] Add All'
export const SUCCESS    = '[Perspectives] Successful firestore write'

export class Query implements Action {
    readonly type = QUERY;
    constructor() { }
}

export class AddAll implements Action {
    readonly type = ADD_ALL;
    constructor(public perspectives: Perspective[]) { }
}

export class Success implements Action {
    readonly type = SUCCESS;
    constructor() { }
}


export class Create implements Action {
    readonly type = CREATE;
    constructor(public perspective: Perspective) { }
}

export class Update implements Action {
    readonly type = UPDATE;
    constructor(
        public id: string,
        public changes: Partial<Perspective>,
      ) { }
}

export class Delete implements Action {
    readonly type = DELETE;
    constructor(public id: string) { }
}

export type PerspectiveActions
= Create
| Update
| Delete
| Query
| AddAll;
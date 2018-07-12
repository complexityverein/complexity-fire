import { Action } from '@ngrx/store';
import { Pubperspective }  from '../models/pubperspective.model';

export const QUERY    = '[Pubperspective] query Pubperspectives';

export const ADDED    = '[Pubperspective] added';
export const MODIFIED = '[Pubperspective] modified';
export const REMOVED  = '[Pubperspective] removed';

export const UPDATE   = '[Pubperspective] update';
export const SUCCESS  = '[Pubperspective] update success';

// Initial query
export class Query implements Action {
    readonly type = QUERY;
    constructor() {}
  }

// AngularFire2 StateChanges
export class Added implements Action {
    readonly type = ADDED;
    constructor(public payload: Pubperspective) {}
}

export class Modified implements Action {
    readonly type = MODIFIED;
    constructor(public payload: Pubperspective) {}
}

export class Removed implements Action {
    readonly type = REMOVED;
    constructor(public payload: Pubperspective) {}
}


// Run a Firestore Update
export class Update implements Action {
    readonly type = UPDATE;
    constructor(
        public id: string,
        public changes: Partial<Pubperspective>,
      ) { }
}

export class Success implements Action {
    readonly type = SUCCESS;
    constructor() {}
}

export type PubperspectiveActions = 
    Query | 
    Added | 
    Modified | 
    Removed | 
    Update | 
    Success;
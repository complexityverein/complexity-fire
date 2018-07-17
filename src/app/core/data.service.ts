import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs';
import { IUser, PUser } from './models/user.model';
import { PPerspective, IPerspective } from './models/perspective.model';
import { IDimension, PDimension } from './models/dimension.model';
import { IValue, PValue } from './models/value.model';
import { PActions, IActions } from './models/actions.model';
import { AuthService } from './auth.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const guest: IUser = {
  uid: 'guestID',
  displayName: 'Guest'
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
ppersCollection: AngularFirestoreCollection<any>;
ppersDocument:   AngularFirestoreDocument<any>;
pdimsCollection: AngularFirestoreCollection<any>;
pdimsDocument:   AngularFirestoreDocument<any>;
pvalsCollection: AngularFirestoreCollection<any>;
pvalsDocument:   AngularFirestoreDocument<any>;


constructor(private authService: AuthService, private afs: AngularFirestore) {
  this.ppersCollection = this.afs.collection('perspectives', (ref) => ref.orderBy('time', 'desc').limit(5));
  this.pdimsCollection = this.afs.collection('dimensions', (ref) => ref.orderBy('time', 'desc').limit(5));
  this.pvalsCollection = this.afs.collection('values', (ref) => ref.orderBy('time', 'desc').limit(5));
}
  //DATA STORE
  // MY USER
  public iUser = new BehaviorSubject<IUser>(guest);
  iUserObs = this.iUser.asObservable();
  // ALL PRIVATE USER ACTIONS
  // public iActions = new BehaviorSubject<IActions[]>([]);
  // iActionsObs = this.iActions.asObservable();
  // // MY PERSPECTIVES
  // public iPerspectives = new BehaviorSubject<IPerspective[]>([]);
  // iPerspectivesObs = this.iPerspectives.asObservable();
  // // MY DIMENSIONS
  // public iDimensions = new BehaviorSubject<IDimension[]>([]);
  // iDimensionsObs = this.iDimensions.asObservable();
  // // MY VALUES
  // public iValues = new BehaviorSubject<IValue[]>([]);
  // iValuesObs = this.iValues.asObservable();


  //PUBLIC DATA
  // ALL PUBLIC USERS
  // public pUsers = new BehaviorSubject<PUser[]>([]);
  // pUsersObs = this.pUsers.asObservable();
  // ALL PUBLIC USER ACTIONS
  // public pActions = new BehaviorSubject<PActions[]>([]);
  // pActionsObs = this.pActions.asObservable();
  // ALL PUBLIC PERSPECTIVES
  public pPerspectives = new BehaviorSubject<PPerspective[]>([]);
  pPerspectivesObs = this.pPerspectives.asObservable();
  // ALL PUBLIC DIMENSIONS
  public pDimensions = new BehaviorSubject<PDimension[]>([]);
  pDimensionsObs = this.pDimensions.asObservable();
  // ALL PUBLIC VALUES
  public pValues = new BehaviorSubject<PValue[]>([]);
  pValuesObs = this.pValues.asObservable();


  //SELECTED DATA
  //SELECTED APP
  public selApp = new BehaviorSubject<String>("home");
  selAppObs = this.selApp.asObservable();
  //SELECTED TOOL
  public selTool = new BehaviorSubject<String>("home");
  selToolObs = this.selTool.asObservable();
  //SELECTED PERSEPCTIVES
  selPerspectives = new BehaviorSubject<PPerspective[]>([]);
  selPerspectivesObs = this.selPerspectives.asObservable();
  //SELECTED DIMENSIONS
  selDimensions = new BehaviorSubject<PDimension[]>([]);
  selDimensionsObs = this.selDimensions.asObservable();
  //SELECTED VALUES
  selValues = new BehaviorSubject<PDimension[]>([]);
  selValuesObs = this.selValues.asObservable();


  loadPublicData(){
    this.pPerspectives.next(this.getAllPPers()['perspectives']);
  }

  loadPrivateData(){}


  getAllPPers(): Observable<PPerspective[]> {
    // ['added', 'modified', 'removed']
    return this.ppersCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          return { id: a.payload.doc.id, ...data };
        });
      })
    );
  }
  getAllPDimss(): Observable<any[]> {
    // ['added', 'modified', 'removed']
    return this.pdimsCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          return { id: a.payload.doc.id, ...data };
        });
      })
    );
  }

  getAllPVals(): Observable<any[]> {
    // ['added', 'modified', 'removed']
    return this.pvalsCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          return { id: a.payload.doc.id, ...data };
        });
      })
    );
  }
  
}

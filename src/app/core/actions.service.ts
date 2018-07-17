import { Injectable } from '@angular/core';
import { PPerspective } from './models/perspective.model';
import { PDimension } from './models/dimension.model';
import { PValue } from './models/value.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ActionsService {
ppersCollection: AngularFirestoreCollection<any>;
ppersDocument:   AngularFirestoreDocument<any>;
pdimsCollection: AngularFirestoreCollection<any>;
pdimsDocument:   AngularFirestoreDocument<any>;
pvalsCollection: AngularFirestoreCollection<any>;
pvalsDocument:   AngularFirestoreDocument<any>;

  constructor(private afs: AngularFirestore) {
    this.ppersCollection = this.afs.collection('perspectives', (ref) => ref.orderBy('time', 'desc').limit(5));
    this.pdimsCollection = this.afs.collection('dimensions', (ref) => ref.orderBy('time', 'desc').limit(5));
    this.pvalsCollection = this.afs.collection('values', (ref) => ref.orderBy('time', 'desc').limit(5));
  }

  getAllPPers(): Observable<any[]> {
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
  getPPers(id: string) {
    return this.afs.doc<any>(`perspectives/${id}`);
  }
  getPDims(id: string) {
    return this.afs.doc<any>(`dimensions/${id}`);
  }
  getPVals(id: string) {
    return this.afs.doc<any>(`values/${id}`);
  }
  updatePPers(id: string, data: any) {
    return this.getPPers(id).update(data);
  }
  updatePDims(id: string, data: any) {
    return this.getPDims(id).update(data);
  }
  updatePVals(id: string, data: any) {
    return this.getPVals(id).update(data);
  }
  deletePPers(id: string) {
    return this.getPPers(id).delete();
  }
  deletePDims(id: string) {
    return this.getPDims(id).delete();
  }
  deletePVals(id: string) {
    return this.getPVals(id).delete();
  }


  //Save NEW PERSPECTIVE
  // Check if values/dimensions are new
  newPPerspective(perspective: PPerspective) {
    return this.ppersCollection.add(perspective);
  }
  updatePPerspective(pperspective: PPerspective) {

  }
  deletePPerspective(pperspective: PPerspective) {
  }

  newPDimension(pdimension: PDimension) {

  }
  updatePDimension(pdimension: PDimension) {

  }
  deletePDimension(pdimension: PDimension) {

  }
  newPValue(pvalue: PValue) {

  }
  updatePValue(pvalue: PValue) {

  }
  deletePValue(pvalue: PValue) {

  }



}

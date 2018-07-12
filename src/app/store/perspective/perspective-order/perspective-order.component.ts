import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from '../../actions/perspective.actions';
import * as fromPerspective from '../../reducers/perspective.reducer';
import { Perspective } from '../../models/perspective.model';

@Component({
  selector: 'app-perspective-order',
  templateUrl: './perspective-order.component.html',
  styleUrls: ['./perspective-order.component.css']
})
export class PerspectiveOrderComponent implements OnInit {

  perspectives: Observable<any>;

  constructor(private store: Store<fromPerspective.State>) { }

  ngOnInit() {
    this.perspectives = this.store.select(fromPerspective.selectAll)

    this.store.dispatch(  new actions.Query() ) /// <--- new part here
  }

  createPerspective() {
    const perspective: Perspective = {
      id: new Date().getUTCMilliseconds().toString(),
      size: 'small'
    }

    this.store.dispatch( new actions.Create(perspective) )
  }

  updatePerspective(id, size) {
    this.store.dispatch( new actions.Update(id, { size: size }) )
  }

  deletePerspective(id) {
    this.store.dispatch( new actions.Delete(id) )
  }

}
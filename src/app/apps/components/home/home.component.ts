import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pubperspective } from '../../../core/models/pubperspective.model';
import { Pubvalue } from '../../../core/models/pubvalue.model';
import { Pubdimension } from '../../../core/models/pubdimension.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pubperspectives: Observable<any>;

  constructor() { }

  ngOnInit() {
  }
  createPubperspective() {
    // Example: 
    //For each value: Check if it exists, if yes save reference
    //
    //check if Value exists
    //
    const values = ['A', 'B', 'C', 'A1', 'A2', 'C1', 'C3'];
    const dimensions = [
      { value1: ['A'], type: 'implies', value2: ['B'] }, { value1: ['A'], type: 'content', value2: ['A1', 'A2'] },
      { value1: ['A'], type: 'implies', value2: ['C'] }, { value1: ['B'], type: 'implies', value2: ['C'] },
      { value1: ['A2'], type: 'implies', value2: ['C1'] }, { value1: ['C'], type: 'content', value2: ['C1', 'C2'] }
    ]

    const pubvalues: Pubvalue[] = [];
    values.forEach(val => {
      const newValue: Pubvalue = {
        id: val,
        type: 'string',
        label: val
      };
      pubvalues.push(newValue);
    });

    const pubdimensions: Pubdimension[] = [];
    dimensions.forEach(dim => {
      const newDim: Pubdimension = {
        value1: dim.value1,
        type: dim.type,
        value2: dim.value2
      }
      pubdimensions.push(newDim);
    })


    const pubperspective: Pubperspective = {
      id: new Date().getUTCMilliseconds().toString(),
      label: 'Example Perspective',
      dims: pubdimensions,
      seldims: pubdimensions,
      vals: pubvalues,
      selvals: []
    }

   // this.store.dispatch(new actions.Create(pubperspective))
  }


}


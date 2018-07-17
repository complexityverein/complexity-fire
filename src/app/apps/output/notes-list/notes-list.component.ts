import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PPerspective } from '../../../core/models/perspective.model';
import { PValue } from '../../../core/models/value.model';
import { PDimension } from '../../../core/models/dimension.model';
import { ActionsService } from '../../../core/actions.service';
import { DataService } from '../../../core/data.service';

@Component({
  selector: 'notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  pperspectives;


  constructor(private actionService: ActionsService, private dataService: DataService) { }

  ngOnInit() {
   // this.actionService.getPPers();
   // this.pperspectives = this.dataService.pPerspectives.subscribe(data => this.pperspectives = data)
  }

  // clickHandler() {
  //   const newValue: PValue = {
  //     val: this.content
  //   }
  //   const noteValue: PValue = {
  //     val: 'note'
  //   }
  //   this.actionsSe

  //   const newDimension: PDimension = {
  //     value1: ,
  //     type:'isPartOf',
  //     value2: 
  //   }
  //   this.notesService.createNote(this.content);
  //   this.content = '';
  // }

}

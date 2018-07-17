import { Component, Input } from '@angular/core';

import { NotesService } from '../../service/notes.service';

@Component({
  selector: 'note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss'],
})
export class NoteDetailComponent {
  content: string;

  constructor(private notesService: NotesService) { }

 

  deleteNote(id: string) {
    this.notesService.deleteNote(id);
  }

}

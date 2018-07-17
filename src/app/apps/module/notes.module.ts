import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NotesListComponent } from '../output/notes-list/notes-list.component';
import { NoteDetailComponent } from '../input/note-detail/note-detail.component';
import { NotesService } from '../service/notes.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [NotesListComponent, NoteDetailComponent],
  providers: [NotesService]
})
export class NotesModule { }

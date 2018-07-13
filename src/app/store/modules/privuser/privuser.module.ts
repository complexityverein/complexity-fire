import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from '../../reducers/privuser.reducer';
import { UserEffects } from '../../effects/privuser.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  declarations: []
})
export class PrivuserModule { }

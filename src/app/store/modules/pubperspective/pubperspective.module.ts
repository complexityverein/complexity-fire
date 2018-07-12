import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects'

import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { pubperspectiveReducer } from '../../reducers/pubperspective.reducer';
import { PubperspectiveEffects } from '../../effects/pubperspective.effects';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('pubperspective', pubperspectiveReducer),
    EffectsModule.forFeature([PubperspectiveEffects])
  ]
})
export class PubperspectiveModule { }

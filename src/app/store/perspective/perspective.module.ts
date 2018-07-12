import { NgModule } from '@angular/core';
import { PerspectiveOrderComponent } from './perspective-order/perspective-order.component'
import { EffectsModule } from '@ngrx/effects'

import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { perspectiveReducer } from '../reducers/perspective.reducer';
import { PerspectiveEffects } from '../effects/perspective.effects';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('perspective', perspectiveReducer),
    EffectsModule.forFeature([PerspectiveEffects])
  ],
  exports: [PerspectiveOrderComponent],
  declarations: [PerspectiveOrderComponent]
})
export class PerspectiveModule { }

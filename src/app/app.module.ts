import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AppsModule } from './apps/apps.module';
import { UiModule } from './ui/ui.module';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PerspectiveModule } from './store/perspective/perspective.module';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects'
import { UserStoreModule } from './store/modules/user-store/user-store.module';
import { UserEffects } from './store/effects/user.effects';
import { PerspectiveEffects } from './store/effects/perspective.effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'Complexity-App'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppsModule,
    UiModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // number of states to retain
    }),
    PerspectiveModule,
    UserStoreModule,
    EffectsModule.forRoot([UserEffects, PerspectiveEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent, SidenavComponent, ToolbarComponent],
  exports: [NavbarComponent, SidenavComponent, ToolbarComponent]
})
export class UiModule { }

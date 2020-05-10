import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

import { NavMenuComponent } from './nav-menu.component';

@NgModule({
  declarations: [NavMenuComponent],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule
  ],
  exports: [
    NavMenuComponent
  ]
})
export class NavMenuModule { }

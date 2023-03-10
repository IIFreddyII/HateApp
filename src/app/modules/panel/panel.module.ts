import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';


@NgModule({
  declarations: [
    PanelComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule
  ]
})
export class PanelModule { }

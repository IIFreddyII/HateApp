import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AnalysisComponent } from './pages/analysis/analysis.component';
import { AnalysisRoutingModule } from './pages/analysis/analysis-routing.module';


@NgModule({
  declarations: [
    PanelComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule
  ]
})
export class PanelModule { }

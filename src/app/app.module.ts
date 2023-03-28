import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { AnalysisModule } from './modules/panel/pages/analysis/analysis.module';
import { PanelComponent } from './modules/panel/panel.component';
import { PanelModule } from './modules/panel/panel.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    AnalysisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

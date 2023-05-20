import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalysisRoutingModule } from './analysis-routing.module';
import { FeelingsComponent } from './components/feelings/feelings.component';
import { GenderComponent } from './components/gender/gender.component';
import { WordsComponent } from './components/words/words.component';
import { AnalysisComponent } from './analysis.component';
import { RouterModule } from '@angular/router';
import { ResultComponent } from './components/result/result.component';



@NgModule({
  declarations: [
    AnalysisComponent,
    FeelingsComponent,
    GenderComponent,
    WordsComponent,
    ResultComponent,
    
  ],
  imports: [
    CommonModule,
    AnalysisRoutingModule
  ]
})
export class AnalysisModule { }

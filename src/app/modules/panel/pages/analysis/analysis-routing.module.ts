import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeelingsComponent } from './components/feelings/feelings.component';
import { GenderComponent } from './components/gender/gender.component';
import { WordsComponent } from './components/words/words.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'feeling', component: FeelingsComponent 
      },
      {
        path: 'gender', component: GenderComponent
      },
      {
        path: 'word', component: WordsComponent 
      },
      {
        path: '**', redirectTo: 'feeling'
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysisRoutingModule { }

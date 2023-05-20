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
        path: 'gender', component: GenderComponent,
        loadChildren: () => import('./components/gender/gender.module').then(m => m.GenderModule)
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlgoritBayesComponent } from './algorit-bayes/algorit-bayes.component';
import { AlgoritKnnComponent } from './algorit-knn/algorit-knn.component';
import { AlgoritRegretionComponent } from './algorit-regretion/algorit-regretion.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'naive_bayes', component: AlgoritBayesComponent 
      },
      {
        path: 'knn', component: AlgoritKnnComponent
      },
      {
        path: 'logistic_regression', component: AlgoritRegretionComponent 
      },
      {
        path: '**', redirectTo: 'naive_bayes'
      }
    ]
  },
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenderRoutingModule { }

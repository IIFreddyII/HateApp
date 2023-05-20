import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenderRoutingModule } from './gender-routing.module';
import { AlgoritKnnComponent } from './algorit-knn/algorit-knn.component';
import { AlgoritBayesComponent } from './algorit-bayes/algorit-bayes.component';
import { AlgoritRegretionComponent } from './algorit-regretion/algorit-regretion.component'; 

@NgModule({
  declarations: [
    AlgoritKnnComponent,
    AlgoritBayesComponent,
    AlgoritRegretionComponent,
  ],
  imports: [
    CommonModule,
    GenderRoutingModule
  ]
})
export class GenderModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../../pages/about/about.component';
import { AnalysisComponent } from '../../pages/analysis/analysis.component';
import { ContactComponent } from '../../pages/contact/contact.component';
import { HomeComponent } from '../../pages/home/home.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }

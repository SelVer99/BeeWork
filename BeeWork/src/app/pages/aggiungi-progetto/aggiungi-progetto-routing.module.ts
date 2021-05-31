import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AggiungiProgettoPage } from './aggiungi-progetto.page';

const routes: Routes = [
  {
    path: '',
    component: AggiungiProgettoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AggiungiProgettoPageRoutingModule {}

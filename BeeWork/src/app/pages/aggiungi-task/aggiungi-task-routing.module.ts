import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AggiungiTaskPage } from './aggiungi-task.page';

const routes: Routes = [
  {
    path: '',
    component: AggiungiTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AggiungiTaskPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgettiTaskPersonaliPage } from './progetti-task-personali.page';

const routes: Routes = [
  {
    path: '',
    component: ProgettiTaskPersonaliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgettiTaskPersonaliPageRoutingModule {}

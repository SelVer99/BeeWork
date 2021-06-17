import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettagliTaskPage } from './dettagli-task.page';

const routes: Routes = [
  {
    path: '',
    component: DettagliTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettagliTaskPageRoutingModule {}

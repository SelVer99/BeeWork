import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaTaskPage } from './lista-task.page';

const routes: Routes = [
  // /progetti/123/tasks
  {
    path: '',
    component: ListaTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaTaskPageRoutingModule {}

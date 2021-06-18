import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreaTaskComponent } from './components/crea-task/crea-task.component';
import { DettaglioTaskComponent } from './components/dettaglio-task/dettaglio-task.component';

import { ListaTaskPage } from './lista-task.page';

const routes: Routes = [
  // /progetti/123/tasks
  {
    path: '',
    children: [
      {
        path: '',
        component: ListaTaskPage
      },
      {
        path: 'crea',
        component: CreaTaskComponent
      },
      {
        path: ':task',
        component: DettaglioTaskComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaTaskPageRoutingModule {}

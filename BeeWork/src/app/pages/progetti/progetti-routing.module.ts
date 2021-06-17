import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgettiPage } from './progetti.page';
import {DettaglioProgettoComponent} from './components/dettaglio-progetto/dettaglio-progetto.component';
import {ShellComponent} from './components/shell/shell.component';

const routes: Routes = [
  // /progetti
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        component: ProgettiPage
      },
      {
        path: ':id',
        component: DettaglioProgettoComponent,
        children: [
          {
            path: 'tasks',
            loadChildren: () => import('../lista-task/lista-task.module').then(m => m.ListaTaskPageModule)
          }
        ]
      }
    ]
  },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgettiPageRoutingModule {}

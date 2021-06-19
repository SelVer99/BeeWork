import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgettiPage } from './progetti.page';
import {DettaglioProgettoComponent} from './components/dettaglio-progetto/dettaglio-progetto.component';
import { AggiungiMembriComponent } from './components/aggiungi-membri/aggiungi-membri.component';

const routes: Routes = [
  // /progetti
  {
    path: '',
    children: [
      {
        path: '',
        component: ProgettiPage
      },
      {
        path: ':id',
        children: [
          {
            path: '',
            component: DettaglioProgettoComponent,
          },
          {
            path: 'tasks',
            loadChildren: () => import('../lista-task/lista-task.module').then(m => m.ListaTaskPageModule)
          },
          {
            path: 'aggiungi-utenti',
            component: AggiungiMembriComponent
          }
        ]
      },

    ]
  },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgettiPageRoutingModule {}

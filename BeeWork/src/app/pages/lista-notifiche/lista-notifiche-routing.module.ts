import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaNotifichePage } from './lista-notifiche.page';

const routes: Routes = [
  {
    path: '',
    component: ListaNotifichePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaNotifichePageRoutingModule {}

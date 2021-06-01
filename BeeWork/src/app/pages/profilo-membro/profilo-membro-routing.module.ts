import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfiloMembroPage } from './profilo-membro.page';

const routes: Routes = [
  {
    path: '',
    component: ProfiloMembroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfiloMembroPageRoutingModule {}

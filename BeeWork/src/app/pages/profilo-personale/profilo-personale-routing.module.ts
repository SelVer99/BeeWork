import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfiloPersonalePage } from './profilo-personale.page';

const routes: Routes = [
  {
    path: '',
    component: ProfiloPersonalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfiloPersonalePageRoutingModule {}

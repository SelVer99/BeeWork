import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfiloPersonalePageRoutingModule } from './profilo-personale-routing.module';

import { ProfiloPersonalePage } from './profilo-personale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfiloPersonalePageRoutingModule
  ],
  declarations: [ProfiloPersonalePage]
})
export class ProfiloPersonalePageModule {}

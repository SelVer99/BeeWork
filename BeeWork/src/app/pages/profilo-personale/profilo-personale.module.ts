import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ProfiloPersonalePageRoutingModule } from './profilo-personale-routing.module';

import { ProfiloPersonalePage } from './profilo-personale.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    ProfiloPersonalePageRoutingModule
  ],
  declarations: [ProfiloPersonalePage]
})
export class ProfiloPersonalePageModule {}

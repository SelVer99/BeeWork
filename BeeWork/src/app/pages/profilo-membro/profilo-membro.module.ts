import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule,} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfiloMembroPageRoutingModule } from './profilo-membro-routing.module';

import { ProfiloMembroPage } from './profilo-membro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProfiloMembroPageRoutingModule
  ],
  declarations: [ProfiloMembroPage]
})
export class ProfiloMembroPageModule {}

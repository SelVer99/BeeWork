import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgettoPageRoutingModule } from './progetto-routing.module';

import { ProgettoPage } from './progetto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgettoPageRoutingModule
  ],
  declarations: [ProgettoPage]
})
export class ProgettoPageModule {}

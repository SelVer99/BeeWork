import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AggiungiProgettoPageRoutingModule } from './aggiungi-progetto-routing.module';

import { AggiungiProgettoPage } from './aggiungi-progetto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AggiungiProgettoPageRoutingModule
  ],
  declarations: [AggiungiProgettoPage]
})
export class AggiungiProgettoPageModule {}

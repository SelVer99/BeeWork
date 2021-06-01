import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AggiungiProgettoPageRoutingModule } from './aggiungi-progetto-routing.module';

import { AggiungiProgettoPage } from './aggiungi-progetto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AggiungiProgettoPageRoutingModule
  ],
  declarations: [AggiungiProgettoPage]
})
export class AggiungiProgettoPageModule {}

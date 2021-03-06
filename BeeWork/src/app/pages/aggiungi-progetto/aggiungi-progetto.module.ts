import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AggiungiProgettoPageRoutingModule } from './aggiungi-progetto-routing.module';

import { AggiungiProgettoPage } from './aggiungi-progetto.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    ReactiveFormsModule,
    AggiungiProgettoPageRoutingModule
  ],
  declarations: [AggiungiProgettoPage]
})
export class AggiungiProgettoPageModule {}

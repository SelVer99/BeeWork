import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImpostazioniPageRoutingModule } from './impostazioni-routing.module';

import { ImpostazioniPage } from './impostazioni.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    ImpostazioniPageRoutingModule
  ],
  declarations: [ImpostazioniPage]
})
export class ImpostazioniPageModule {}

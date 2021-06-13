import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImpostazioniPageRoutingModule } from './impostazioni-routing.module';

import { ImpostazioniPage } from './impostazioni.page';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {createTranslateLoader} from '../../app.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImpostazioniPageRoutingModule
  ],
  declarations: [ImpostazioniPage]
})
export class ImpostazioniPageModule {}

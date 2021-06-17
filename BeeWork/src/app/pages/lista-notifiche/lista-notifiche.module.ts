import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaNotifichePageRoutingModule } from './lista-notifiche-routing.module';

import { ListaNotifichePage } from './lista-notifiche.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    ListaNotifichePageRoutingModule
  ],
  declarations: [ListaNotifichePage]
})
export class ListaNotifichePageModule {}

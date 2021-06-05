import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaNotifichePageRoutingModule } from './lista-notifiche-routing.module';

import { ListaNotifichePage } from './lista-notifiche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaNotifichePageRoutingModule
  ],
  declarations: [ListaNotifichePage]
})
export class ListaNotifichePageModule {}

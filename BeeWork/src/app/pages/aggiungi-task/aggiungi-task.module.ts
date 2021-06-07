import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AggiungiTaskPageRoutingModule } from './aggiungi-task-routing.module';

import { AggiungiTaskPage } from './aggiungi-task.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule.forChild(),
    AggiungiTaskPageRoutingModule
  ],
  declarations: [AggiungiTaskPage]
})
export class AggiungiTaskPageModule {}

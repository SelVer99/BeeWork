import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaTaskPageRoutingModule } from './lista-task-routing.module';

import { ListaTaskPage } from './lista-task.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    ListaTaskPageRoutingModule
  ],
  declarations: [ListaTaskPage]
})
export class ListaTaskPageModule {}

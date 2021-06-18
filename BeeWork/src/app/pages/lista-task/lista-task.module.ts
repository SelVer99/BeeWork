import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaTaskPageRoutingModule } from './lista-task-routing.module';

import { ListaTaskPage } from './lista-task.page';
import {TranslateModule} from '@ngx-translate/core';
import { CreaTaskComponent } from './components/crea-task/crea-task.component';
import { DettaglioTaskComponent } from './components/dettaglio-task/dettaglio-task.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule.forChild(),
    ListaTaskPageRoutingModule
  ],
  declarations: [ListaTaskPage, CreaTaskComponent, DettaglioTaskComponent]
})
export class ListaTaskPageModule {}

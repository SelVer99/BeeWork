import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgettiPageRoutingModule } from './progetti-routing.module';

import { ProgettiPage } from './progetti.page';
import {TranslateModule} from '@ngx-translate/core';
import {DettaglioProgettoComponent} from './components/dettaglio-progetto/dettaglio-progetto.component';
import {ListaTasksComponent} from './components/lista-tasks/lista-tasks.component';
import {ShellComponent} from './components/shell/shell.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    ProgettiPageRoutingModule
  ],
  declarations: [ProgettiPage, DettaglioProgettoComponent, ListaTasksComponent, ShellComponent]
})
export class ProgettiPageModule {}

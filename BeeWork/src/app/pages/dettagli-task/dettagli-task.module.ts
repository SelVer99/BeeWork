import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettagliTaskPageRoutingModule } from './dettagli-task-routing.module';

import { DettagliTaskPage } from './dettagli-task.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    DettagliTaskPageRoutingModule
  ],
  declarations: [DettagliTaskPage]
})
export class DettagliTaskPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettagliTaskPageRoutingModule } from './dettagli-task-routing.module';

import { DettagliTaskPage } from './dettagli-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettagliTaskPageRoutingModule
  ],
  declarations: [DettagliTaskPage]
})
export class DettagliTaskPageModule {}

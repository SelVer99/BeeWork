import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgettiTaskPersonaliPageRoutingModule } from './progetti-task-personali-routing.module';

import { ProgettiTaskPersonaliPage } from './progetti-task-personali.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgettiTaskPersonaliPageRoutingModule
  ],
  declarations: [ProgettiTaskPersonaliPage]
})
export class ProgettiTaskPersonaliPageModule {}

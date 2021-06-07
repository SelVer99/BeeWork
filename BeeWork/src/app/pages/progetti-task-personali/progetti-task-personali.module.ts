import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgettiTaskPersonaliPageRoutingModule } from './progetti-task-personali-routing.module';

import { ProgettiTaskPersonaliPage } from './progetti-task-personali.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    ProgettiTaskPersonaliPageRoutingModule
  ],
  declarations: [ProgettiTaskPersonaliPage]
})
export class ProgettiTaskPersonaliPageModule {}

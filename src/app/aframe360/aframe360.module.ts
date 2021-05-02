import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Aframe360PageRoutingModule } from './aframe360-routing.module';

import { Aframe360Page } from './aframe360.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Aframe360PageRoutingModule
  ],
  declarations: [Aframe360Page]
})
export class Aframe360PageModule {}

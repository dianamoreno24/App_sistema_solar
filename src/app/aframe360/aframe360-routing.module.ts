import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Aframe360Page } from './aframe360.page';

const routes: Routes = [
  {
    path: '',
    component: Aframe360Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Aframe360PageRoutingModule {}

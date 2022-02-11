import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimplemodalPage } from './simplemodal.page';

const routes: Routes = [
  {
    path: '',
    component: SimplemodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimplemodalPageRoutingModule {}

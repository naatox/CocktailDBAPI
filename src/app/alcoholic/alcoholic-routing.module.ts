import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlcoholicPage } from './alcoholic.page';

const routes: Routes = [
  {
    path: '',
    component: AlcoholicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlcoholicPageRoutingModule {}

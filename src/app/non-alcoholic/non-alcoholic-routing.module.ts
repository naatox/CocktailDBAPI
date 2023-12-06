import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NonAlcoholicPage } from './non-alcoholic.page';

const routes: Routes = [
  {
    path: '',
    component: NonAlcoholicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NonAlcoholicPageRoutingModule {}

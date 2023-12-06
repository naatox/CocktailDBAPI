import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrinksPage } from './drinks.page';

const routes: Routes = [
  {
    path: 'drinks',
    component: DrinksPage,
    children: [
      {
        path: 'alcoholic',
        loadChildren: () => import('../alcoholic/alcoholic.module').then( m => m.AlcoholicPageModule)
      },
      {
        path: 'non-alcoholic',
        loadChildren: () => import('../non-alcoholic/non-alcoholic.module').then( m => m.NonAlcoholicPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'drinks',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrinksPageRoutingModule {}

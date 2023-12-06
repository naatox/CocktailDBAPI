import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import ('./drinks/drinks.module').then( m => m.DrinksPageModule)
  },
  {
    path: 'drinks',
    loadChildren: () => import('./drinks/drinks.module').then( m => m.DrinksPageModule)
  },
  {
    path: 'alcoholic',
    loadChildren: () => import('./alcoholic/alcoholic.module').then( m => m.AlcoholicPageModule)
  },
  {
    path: 'non-alcoholic',
    loadChildren: () => import('./non-alcoholic/non-alcoholic.module').then( m => m.NonAlcoholicPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

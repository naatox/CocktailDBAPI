import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NonAlcoholicPageRoutingModule } from './non-alcoholic-routing.module';

import { NonAlcoholicPage } from './non-alcoholic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NonAlcoholicPageRoutingModule
  ],
  declarations: [NonAlcoholicPage]
})
export class NonAlcoholicPageModule {}

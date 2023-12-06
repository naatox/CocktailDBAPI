import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlcoholicPageRoutingModule } from './alcoholic-routing.module';

import { AlcoholicPage } from './alcoholic.page';
import { DrinksService } from '../services/drinks.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlcoholicPageRoutingModule,
  ],
  declarations: [AlcoholicPage]
})
export class AlcoholicPageModule {}

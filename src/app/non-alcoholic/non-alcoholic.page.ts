import { Component, OnInit } from '@angular/core';
import { DrinksService } from '../services/drinks.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-non-alcoholic',
  templateUrl: './non-alcoholic.page.html',
  styleUrls: ['./non-alcoholic.page.scss'],
})
export class NonAlcoholicPage implements OnInit {
  drinksData: any=[];
  activeDrink: any;
  activeDrinksIngredients: any = [];
  constructor(private drinks: DrinksService,public alert: AlertController) { }
  alertButtons = ['Close'];

  ngOnInit() {
    this.drinks.getNonAlcoholicDrinks().subscribe((res: any) => {
      console.log(res);
      this.drinksData = res.drinks;
    });
  }
  async details(id: number) {
    this.activeDrinksIngredients = [];
    this.drinks.getDrinkDetails(id).subscribe((res: any) => {

      this.activeDrink = res.drinks[0];
      console.log(this.activeDrink+ 'a');

      for (let i = 1; i < 16; i++) {
        if (this.activeDrink['strIngredient' + i]) {
          this.activeDrinksIngredients.push(this.activeDrink['strIngredient' + i]);
        }
      }
      alert.subHeader = 'Ingredients: '+ this.activeDrinksIngredients;      alert.message = this.activeDrink.strInstructions;
    });
    console.log(this.activeDrink);

    const alert = await this.alert.create({
      header:'' ,
      subHeader: '',
      message:'' ,
      buttons:this.alertButtons
    });
    await alert.present();


  }
}

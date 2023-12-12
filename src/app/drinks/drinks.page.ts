import { Component, OnInit } from '@angular/core';
import { DrinksService } from '../services/drinks.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.page.html',
  styleUrls: ['./drinks.page.scss'],
})
export class DrinksPage implements OnInit {
  drink: any=[];
  constructor(private service: DrinksService ) { }

  ngOnInit() {
    this.service.getRandDrink().subscribe((res: any) => {

      this.drink = res.drinks[0];
      console.log(this.drink);

    });
  }


}

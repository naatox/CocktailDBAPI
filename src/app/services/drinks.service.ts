import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {
  private url = 'https://www.thecocktaildb.com/api/json/v1/1';
  constructor(private http:HttpClient) { }


  getAlcoholicDrinks() {
    return this.http.get(`${this.url}/filter.php`, { params: { a: 'Alcoholic' } });
  }
  getNonAlcoholicDrinks() {
    return this.http.get(`${this.url}/filter.php`, { params: { a: 'Non_Alcoholic' } });
  }
  getDrinkDetails(id:number) {
    return this.http.get(`${this.url}/lookup.php`, { params: { i: id } });
  }
}

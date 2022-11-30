import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Car } from './car-list/car';

@Injectable({
  providedIn: 'root'
})
export class CarCartService {

  private _cartList: Car[]=[];
  cartList: BehaviorSubject<Car[]>= new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(car: Car){
    this._cartList.push(car);
    this.cartList.next(this._cartList);
  }

  removeCar(car: Car){
    let indice=this._cartList.indexOf(car);
    this._cartList.splice(indice, 1);
    this.cartList.next(this._cartList);
  }
}

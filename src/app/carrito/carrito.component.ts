import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarCartService } from '../car-cart.service';
import { Car } from '../car-list/car';
import { CarListComponent } from '../car-list/car-list.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  carritoList$: Observable<Car[]>;

  constructor(private cart: CarCartService){
    this.carritoList$= cart.cartList.asObservable();
  }

  ngOnInit(): void {
   
  }

  removeCar(car: Car): void{
    this.cart.removeCar(car);
    car.reservado=false;
  }

}

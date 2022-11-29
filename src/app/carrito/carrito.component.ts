import { Component, OnInit } from '@angular/core';
import { CarCartService } from '../car-cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  

  constructor(private cart: CarCartService){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

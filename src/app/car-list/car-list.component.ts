import { Component, OnInit } from '@angular/core';
import { CarCartService } from '../car-cart.service';
import { Car } from './car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  [x: string]: any;

  cars: Car[] = [
    {
      marca:"Toyota",
      modelo: "Hilux",
      anio: 2015,
      combustible: "Diesel",
      precio: 5000000,
      imagen: "assets/img/hilux.jpg",
      okm: false,
      reservado: false,
    },
    {
      marca:"Jeep",
      modelo: "Cherokee",
      anio: 2010,
      combustible: "Nafta",
      precio: 3000000,
      imagen: "assets/img/cherokee.jpg",
      okm: false,
      reservado: false,
    },
    {
      marca:"Bmw",
      modelo: "M5",
      anio: 0,
      combustible: "Nafta",
      precio: 1000000,
      imagen: "assets/img/m5.jpg",
      okm: true,
      reservado: false,
    },
  ];

  constructor(private cart: CarCartService) { 
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
    
  }

  addToCart(car: Car): void{
    this.cart.addToCart(car);

  }



}

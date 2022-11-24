import { Component, OnInit } from '@angular/core';
import { Car } from './car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  cars: Car[] = [
    {
      marca:"Toyota",
      modelo: "Hilux",
      anio: 2015,
      combustible: "Diesel",
      precio: 5000000,
      imagen: "assets/img/hilux.jpg",
      okm: false,
    },
    {
      marca:"Jeep",
      modelo: "Cherokee",
      anio: 2010,
      combustible: "Nafta",
      precio: 3000000,
      imagen: "assets/img/cherokee.jpg",
      okm: false,
    },
    {
      marca:"Bmw",
      modelo: "M5",
      anio: 0,
      combustible: "Nafta",
      precio: 1000000,
      imagen: "assets/img/m5.jpg",
      okm: true,
    },
  ];
   
  

  Constructor() { }

  ngOnInit(): void {
    
  }



}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CarSalesAboutComponent } from './car-sales-about/car-sales-about.component';
import { CarSalesCarsComponent } from './car-sales-cars/car-sales-cars.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarritoComponent,
    CarSalesAboutComponent,
    CarSalesCarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

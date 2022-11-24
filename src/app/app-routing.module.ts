import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarSalesAboutComponent } from './car-sales-about/car-sales-about.component';
import { CarSalesCarsComponent } from './car-sales-cars/car-sales-cars.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'cars',
    pathMatch: 'full',
  },
  {
    path: 'cars', 
    component: CarSalesCarsComponent,
  },
  {
    path: 'about',
    component: CarSalesAboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

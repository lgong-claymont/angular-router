import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityListComponent } from './city-list/city-list.component';
import { CityDetailComponent } from './city-detail/city-detail.component';


const cityRoutes: Routes = [
	{ path: 'cities',  component: CityListComponent, data: { animation: 'cities' } },
  	{ path: 'city/:id', component: CityDetailComponent, data: { animation: 'city' } }
  ];

@NgModule({
  imports: [RouterModule.forChild(cityRoutes)],
  exports: [RouterModule]
})
export class CitiesRoutingModule { }

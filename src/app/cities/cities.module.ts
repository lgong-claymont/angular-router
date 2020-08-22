import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CityListComponent } from './city-list/city-list.component';
import { CityDetailComponent } from './city-detail/city-detail.component';

import { CitiesRoutingModule } from './cities-routing.module';

@NgModule({
  declarations: [
  	CityListComponent,
    CityDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CitiesRoutingModule
  ]
})
export class CitiesModule { }

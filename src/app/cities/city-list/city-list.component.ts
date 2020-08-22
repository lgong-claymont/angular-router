import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { City } from '../city';
import { CityService } from '../city.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  cities$: Observable<City[]>;
  selectedId: number;
  
  constructor(
    private service: CityService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.getCities();
   
    this.cities$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getCities();
      })
    );
  
  }

  // onSelect(city: City): void {
  //  this.selectedCity = city;
  //  this.messageService.add(`CitiesComponent: Selected city id=${city.id}`);
  //}

  // getCities(): void {
  //  this.cityService.getCities()
  //      .subscribe(cities => this.cities = cities);
  // }

}
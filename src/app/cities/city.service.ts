import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { City } from './city';
import { CITIES } from './mock-cities';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class CityService {

  constructor(private messageService: MessageService) { }

  getCities(): Observable<City[]> {
    // TODO: send the message _after_ fetching the cities
    this.messageService.add('CityService: fetched cities');
    return of(CITIES);
  }
  
  getCity(id: number | string) {
    return this.getCities().pipe(
      // (+) before `id` turns the string into a number
      map((cities: City[]) => cities.find(city => city.id === +id))
    );
  }
}

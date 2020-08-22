import { Component, OnInit, Input} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { City } from '../city';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})

export class CityDetailComponent implements OnInit {

  // @Input() city: City;
  city$: Observable<City>;

  constructor(
    private route: ActivatedRoute,
  	private router: Router,
  	private service: CityService) { }

  ngOnInit() {
	this.city$ = this.route.paramMap.pipe(
	  switchMap((params: ParamMap) =>
	    this.service.getCity(params.get('id')))
	);
  }
  
  // gotoCities() {
  //  this.router.navigate(['/cities']);
  // }
  
  gotoCities(city: City) {
  	const cityId = city ? city.id : null;
  	// Pass along the hero id if available
  	// so that the HeroList component can select that hero.
  	// Include a junk 'foo' property for fun.
  	this.router.navigate(['/cities', { id: cityId, foo: 'foo' }]);
  }
}
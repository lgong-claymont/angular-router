import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Event } from '../../event';
import { EventService } from '../../event.service';

@Component({
  selector: 'events-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event$: Observable<Event>;

  constructor(
    private route: ActivatedRoute,
  	private router: Router,
  	private service: EventService) { }

  ngOnInit() {
    this.event$ = this.route.paramMap.pipe(
	  switchMap((params: ParamMap) =>
	    this.service.getEvent(params.get('id'))
	  )
	);
  }
  
  gotoEvents(event: Event) {
  	const eventId = event ? event.id : null;
  	// Pass along the hero id if available
  	// so that the HeroList component can select that hero.
  	// Include a junk 'foo' property for fun.
  	this.router.navigate(['/events', { id: eventId, foo: 'foo' }]);
  }

}

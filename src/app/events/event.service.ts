import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Event } from './event';
import { EVENTS } from './mock-events';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class EventService {

  constructor(private messageService: MessageService) { }

  getEvents(): Observable<Event[]> {
    // TODO: send the message _after_ fetching the cities
    this.messageService.add('EventService: fetched events');
    return of(EVENTS);
  }
  
  getEvent(id: number | string) {
    return this.getEvents().pipe(
      // (+) before `id` turns the string into a number
      map((events: Event[]) => events.find(event => event.id === +id))
    );
  }
}

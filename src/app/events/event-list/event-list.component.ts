import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Event } from '../event';
import { EventService } from '../event.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'events-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events$: Observable<Event[]>;
  selectedId: number;
  
  constructor(
    private service: EventService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
   
    this.events$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getEvents();
      })
    );
  
  }
}

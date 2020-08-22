import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EventsComponent } from './events.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventHomeComponent } from './event-list/event-home/event-home.component';
import { EventDetailComponent } from './event-list/event-detail/event-detail.component';

import { EventsRoutingModule } from './events-routing.module';

@NgModule({
  declarations: [
  	EventsComponent,
  	EventListComponent,
  	EventHomeComponent,
    EventDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }

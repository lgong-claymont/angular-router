import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventHomeComponent } from './event-list/event-home/event-home.component';
import { EventDetailComponent } from './event-list/event-detail/event-detail.component';


const eventRoutes: Routes = [
	{ path: 'events',  
	  component: EventsComponent,
	  children: [
	    {
	      path: '',
	      component: EventListComponent,
	      children: [	        
	        {
	          path: '',
	          component: EventHomeComponent
	        },
	        {
	          path: ':id',
	          component: EventDetailComponent
	        }
	      ]
	    },
	  ]
	}
  ];

@NgModule({
  imports: [RouterModule.forChild(eventRoutes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }

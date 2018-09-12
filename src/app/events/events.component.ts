import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events:any;
  constructor(private eventService:EventsService) { }

  ngOnInit() {
    this.events = this.getInfoEvents();
  }

  getInfoEvents(){
    return this.eventService.getInfoEvents();
  }

}

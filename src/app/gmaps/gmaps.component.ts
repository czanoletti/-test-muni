import { Component, OnInit, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
@Component({
  selector: 'app-gmaps',
  templateUrl: './gmaps.component.html',
  styleUrls: ['./gmaps.component.css']
})
export class GmapsComponent implements OnInit {
  title:string = "Morales, Izabal"
  lat:number = 15.476488;
  lng:number = -88.82819;
  constructor() { }

  ngOnInit() {

  }

}

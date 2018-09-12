import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {


  Events:any = [
    {
      title: "Feria del Niño",
      day: "Lunes",
      month: "OCT",
      dayNumber:"23",
      timeBegin: "12:00PM",
      timeEnd: "5:00PM",
      place: "Cancha Polideportiva",
      Description: "La feria del niño ah llegado. Tendremos dias espectaculares",
      ends: "OCT 25"
    },
    {
      title: "Feria del Niña",
      day: "Lunes",
      month: "OCT",
      dayNumber:"23",
      timeBegin: "12:00PM",
      timeEnd: "5:00PM",
      place: "Cancha Polideportiva",
      Description: "La feria del niño ah llegado. Tendremos dias espectaculares",
      ends: "OCT 25"
    },
    {
      title: "Feria del Niño",
      day: "Lunes",
      month: "OCT",
      dayNumber:"23",
      timeBegin: "12:00PM",
      timeEnd: "5:00PM",
      place: "Cancha Polideportiva",
      Description: "La feria del niño ah llegado. Tendremos dias espectaculares",
      ends: "OCT 25"
    },
    {
      title: "Feria del Niño",
      day: "Lunes",
      month: "OCT",
      dayNumber:"23",
      timeBegin: "12:00PM",
      timeEnd: "5:00PM",
      place: "Cancha Polideportiva",
      Description: "La feria del niño ah llegado. Tendremos dias espectaculares",
      ends: "OCT 25"
    },
    {
      title: "Feria del Niño",
      day: "Lunes",
      month: "OCT",
      dayNumber:"23",
      timeBegin: "12:00PM",
      timeEnd: "5:00PM",
      place: "Cancha Polideportiva",
      Description: "La feria del niño ah llegado. Tendremos dias espectaculares",
      ends: "OCT 25"
    }
  ]

  constructor() { }

  getInfoEvents(){
    return this.Events;
  }
}

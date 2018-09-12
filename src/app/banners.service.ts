import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BannersService {

  slides: any = {
    name: "banner-intro",
    slides:[
      {
        title:"Feria del Niño",
        description:"De un momento de alegría y diversión disfrutaron cientos de niños de Morales, Izabal, que participaron en las actividades de celebración del Día del Niño.",
        src:"../assets/mock-carousel-1.jpg"
      },
      {
        title:"Fiesta patronal",
        description:"Durante la fiesta patronal del municipio de Morales en Izabal, se realizan diversas actividades populares y religiosas propias de esa región.",
        src:"../assets/mock-carousel-2.jpg"
      },
      {
        title:"Miss Morales",
        description:"Se realiza competencia principalmente basada en la belleza física de sus participantes, incorporando a veces cualidades como la personalidad y el talento.",
        src:"../assets/mock-carousel-3.jpg"
      }
    ]
  }

  constructor() { }

  getInfo(){
    return this.slides;
  }
}

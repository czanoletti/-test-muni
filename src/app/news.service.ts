import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  news:any = [
    {
      title: "Mesa estratégica muestra interés por impulsar el turismo de calidad en Izabal",
      description: "Impulsar más el turismo en Izabal se centrará a través de una mesa estratégica, pues el departamento tiene la capacidad para contar con destinos, infraestructura y servicios de primer nivel, según autoridades del Instituto Guatemalteco de Turismo (Inguat).",
      src:"../assets/mock-news-1.jpg",
      link: "",
      depto:"DMP"
    },
    {
      title: "Puente inaugurado en El Estor beneficiará a 10 mil pobladores",
      description: "Al menos 10 mil pobladores de 15 comunidades de El Estor, Izabal, fueron beneficiados con la construcción de un puente vehicular sobre el río Sauce, en la comunidad q’eqchi’ Nimlabenqué.",
      src:"../assets/mock-news-2.jpg",
      link: "",
      depto:"PMT"
    },
    {
      title: "Mesa estratégica muestra interés por impulsar el turismo de calidad en Izabal",
      description: "Impulsar más el turismo en Izabal se centrará a través de una mesa estratégica, pues el departamento tiene la capacidad para contar con destinos, infraestructura y servicios de primer nivel, según autoridades del Instituto Guatemalteco de Turismo (Inguat).",
      src:"../assets/mock-news-1.jpg",
      link: "",
      depto:"Municipalidad Morales"
    },
    {
      title: "Puente inaugurado en El Estor beneficiará a 10 mil pobladores",
      description: "Al menos 10 mil pobladores de 15 comunidades de El Estor, Izabal, fueron beneficiados con la construcción de un puente vehicular sobre el río Sauce, en la comunidad q’eqchi’ Nimlabenqué.",
      src:"../assets/mock-news-2.jpg",
      link: "",
      depto:"DMT"
    },
    {
      title: "Mesa estratégica muestra interés por impulsar el turismo de calidad en Izabal",
      description: "Impulsar más el turismo en Izabal se centrará a través de una mesa estratégica, pues el departamento tiene la capacidad para contar con destinos, infraestructura y servicios de primer nivel, según autoridades del Instituto Guatemalteco de Turismo (Inguat).",
      src:"../assets/mock-news-1.jpg",
      link: "",
      depto: "PMT"
    },
    {
      title: "Puente inaugurado en El Estor beneficiará a 10 mil pobladores",
      description: "Al menos 10 mil pobladores de 15 comunidades de El Estor, Izabal, fueron beneficiados con la construcción de un puente vehicular sobre el río Sauce, en la comunidad q’eqchi’ Nimlabenqué.",
      src:"../assets/mock-news-2.jpg",
      link: "",
      depto:"PMT"
    }

  ]


  constructor() { }

  getInfo(){
    return this.news;
  }

}

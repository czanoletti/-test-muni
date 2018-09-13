import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos:any = [
    {
      title: "Cocina",
      precio: "10",
      frequencia: "Mes",
      gratis:"Gratuito",
      fecha:"Septiembre 20",
      discriptions: [
        "5 fines de semana",
        "Caldos y Carnes",
        "Comidas típicas",
        "Inscríbete en Salón Municipal"
      ]
    },
    {
      title: "Repostería",
      precio: "10",
      frequencia: "mes",
      gratis:"Gratuito",
      fecha:"Enero 20",
      discriptions: [
        "4 sábados",
        "Pasteles",
        "Flanes",
        "Chocolates",
        "Inscríbete en Salón Municipal"
      ]
    },
    {
      title: "Crecimiento personal",
      precio: "0",
      frequencia: "mes",
      gratis:"Gratuito",
      fecha:"Octubre 20",
      discriptions: [
        "Domingo",
        "Finanzas del hogar",
        "Automotivación",
        "Salón Municipal"
      ]
    },
  ]

  constructor() { }

  getInfoCursos(){
    return this.cursos;
  }

}

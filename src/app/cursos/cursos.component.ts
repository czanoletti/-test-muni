import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {


  cursos: any = [
    {
      title:"Cursos de Cocina",
      description: "",
      src: "../assets/mock-cursos-1.jpg"

    },
    {
      title:"Cursos de Repostería",
      description: "",
      src: "../assets/mock-cursos-2.jpg"
    }
  ]

  constructor() { }

  ngOnInit() {

  }

}

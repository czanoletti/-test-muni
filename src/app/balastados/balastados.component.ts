import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balastados',
  templateUrl: './balastados.component.html',
  styleUrls: ['./balastados.component.css']
})
export class BalastadosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}

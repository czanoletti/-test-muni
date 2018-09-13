import { Component, OnInit } from '@angular/core';
declare let $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fixNav(){
    $('#hamb').attr("aria-expanded","false");
    $('#navbarSupportedContent').removeClass("show");
    console.log(  $('#hamb'));
  }

}

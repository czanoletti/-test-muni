import { Component, OnInit } from '@angular/core';
import { BannersService } from '../banners.service';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {
  slides:any;
  constructor(private banner:BannersService) { }

  ngOnInit() {
    console.log(this.banner);
    this.slides = this.getInfoSlides();
  }

  getInfoSlides(){
    return this.banner.getInfo();
  }

}

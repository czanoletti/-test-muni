import { Component, OnInit } from '@angular/core';
import { OpengovService } from '../opengov.service';

@Component({
  selector: 'app-opengov',
  templateUrl: './opengov.component.html',
  styleUrls: ['./opengov.component.css']
})
export class OpengovComponent implements OnInit {
  info:any;
  constructor(private govService: OpengovService) { }

  ngOnInit() {
    this.info = this.getInfo();
    window.scrollTo(0, 0);
  }

  getInfo(){
    return this.govService.getPublicInfo();
  }

}

import { Component, OnInit } from '@angular/core';
import { GovServicesService } from '../gov-services.service';

@Component({
  selector: 'app-gov-services',
  templateUrl: './gov-services.component.html',
  styleUrls: ['./gov-services.component.css']
})
export class GovServicesComponent implements OnInit {

  services:any;

  constructor(private govService:GovServicesService) { }

  ngOnInit() {
    this.services = this.getServicesInfo();
  }

  getServicesInfo(){
    return this.govService.getInfo();
  }



}

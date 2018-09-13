import { Component, OnInit } from '@angular/core';
import { GovServicesService } from '../gov-services.service';
import * as jspdf from 'jspdf';

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
    window.scrollTo(0, 0);
  }

  getServicesInfo(){
    return this.govService.getInfo();
  }

  printPDF(element, title, content){
    console.log('printing...');
    console.log(element);
    console.log(title);
    console.log(content.innerHTML);

    let doc = new jspdf();
    doc.text()

  }

}

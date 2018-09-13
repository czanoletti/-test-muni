import { Component, OnInit } from '@angular/core';
import { VumeService } from '../vume.service';
@Component({
  selector: 'app-vume',
  templateUrl: './vume.component.html',
  styleUrls: ['./vume.component.css']
})
export class VumeComponent implements OnInit {

  jobs:any;
  constructor(private vumeService:VumeService ) { }

  ngOnInit() {
    this.jobs = this.getJobs();
  }

  getJobs(){
    return this.vumeService.getInfoJobs();
  }

}

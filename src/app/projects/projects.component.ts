import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  introPresented:any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.introPresented = this.route.snapshot.params.index
    console.log(this.route.snapshot.params.index);
  
  }


}

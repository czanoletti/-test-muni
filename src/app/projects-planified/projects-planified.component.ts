import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
@Component({
  selector: 'app-projects-planified',
  templateUrl: './projects-planified.component.html',
  styleUrls: ['./projects-planified.component.css']
})
export class ProjectsPlanifiedComponent implements OnInit {

  projectsPlanned:any;
  constructor(private projectService:ProjectsService) { }

  ngOnInit() {
    this.projectsPlanned = this.getInfoPlanned();
    console.log(this.projectsPlanned);
  
  }

  getInfoPlanned(){
    return this.projectService.getPlannedProjects();
  }
}

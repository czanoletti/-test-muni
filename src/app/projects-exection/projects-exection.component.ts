import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
@Component({
  selector: 'app-projects-exection',
  templateUrl: './projects-exection.component.html',
  styleUrls: ['./projects-exection.component.css']
})
export class ProjectsExectionComponent implements OnInit {

  projectsExecution:any;
  constructor(private projectService :ProjectsService) { }

  ngOnInit() {

    this.projectsExecution = this.getInfoExecution()
  }

  getInfoExecution(){
    return this.projectService.getExecutingProjects()
  }

}

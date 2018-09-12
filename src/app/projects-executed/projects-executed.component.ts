import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects-executed',
  templateUrl: './projects-executed.component.html',
  styleUrls: ['./projects-executed.component.css']
})
export class ProjectsExecutedComponent implements OnInit {
  
  projects:any;

  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.projects = this.getInfoExecuted();
    console.log(this.projects);
  }

  getInfoExecuted(){
    return this.projectService.getExecutionProjects();
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 // Components
 import { NewsComponent } from './news/news.component';
 import { TicketConsultationComponent } from './ticket-consultation/ticket-consultation.component';
 import { ProjectsComponent } from './projects/projects.component';
 import { HomeComponent } from './home/home.component';
 import { AboutComponent } from './about/about.component';
 import { ErrorComponent } from './error/error.component';
 import { ProjectsExectionComponent } from './projects-exection/projects-exection.component';
 import { ProjectsExecutedComponent } from './projects-executed/projects-executed.component';
 import { ProjectsPlanifiedComponent } from './projects-planified/projects-planified.component';
 import { OpengovComponent } from './opengov/opengov.component';
 import { GovServicesComponent } from './gov-services/gov-services.component';
 import { LoginComponent } from './login/login.component';
 import { VumeComponent } from './vume/vume.component';
 import { BalastadosComponent } from './balastados/balastados.component';
 import { CursosComponent} from './cursos/cursos.component';
 import { NewsDisplayComponent } from './news-display/news-display.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path:'proyectos', component: ProjectsComponent,
    children: [
      {path:'ejecutados', component: ProjectsExecutedComponent, outlet:"second"},
      {path:'ejecucion', component: ProjectsExectionComponent, outlet:"second"},
      {path:'planificados', component: ProjectsPlanifiedComponent, outlet:"second"}
    ]

  },
  {
    path:'consultas', component: TicketConsultationComponent
  },
  {
    path:'tumuni', component: AboutComponent
  },
  {
    path:'noticias', component: NewsComponent
  },
  {
    path:'noticias/:id', component: NewsDisplayComponent
  },
  {
    path:'informacionabierta', component: OpengovComponent
  },
  {
    path:'servicios', component: GovServicesComponent
  },
  {
    path:'ingreso', component: LoginComponent
  },
  {
    path:'vume', component: VumeComponent
  },
  {
    path:'balastados', component: BalastadosComponent
  },
  {
    path:'cursos', component: CursosComponent
  },
  {
    path:'**', component:ErrorComponent
  }
]


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes, , {scrollPositionRestoration: 'enabled'}) ]
})
export class AppRoutingModule { }

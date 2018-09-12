import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannersComponent } from './banners/banners.component';
import { InfoBoardComponent } from './info-board/info-board.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { TicketConsultationComponent } from './ticket-consultation/ticket-consultation.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProjectsExecutedComponent } from './projects-executed/projects-executed.component';
import { ProjectsExectionComponent } from './projects-exection/projects-exection.component';
import { ProjectsPlanifiedComponent } from './projects-planified/projects-planified.component';
import { OpengovComponent } from './opengov/opengov.component';
import { GovServicesComponent } from './gov-services/gov-services.component';
import { LoginComponent } from './login/login.component';
import { ProjectTemplateComponent } from './project-template/project-template.component';
import { CursosComponent } from './cursos/cursos.component';
import { VumeComponent } from './vume/vume.component';
import { BalastadosComponent } from './balastados/balastados.component';
import { EventsComponent } from './events/events.component';
import { YoutubeComponent } from './youtube/youtube.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannersComponent,
    InfoBoardComponent,
    FooterComponent,
    NewsComponent,
    TicketConsultationComponent,
    ProjectsComponent,
    HomeComponent,
    AboutComponent,
    ErrorComponent,
    CarouselComponent,
    ProjectsExecutedComponent,
    ProjectsExectionComponent,
    ProjectsPlanifiedComponent,
    OpengovComponent,
    GovServicesComponent,
    LoginComponent,
    ProjectTemplateComponent,
    CursosComponent,
    VumeComponent,
    BalastadosComponent,
    EventsComponent,
    YoutubeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

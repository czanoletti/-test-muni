import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

// PDF
import { PdfViewerModule } from 'ng2-pdf-viewer';

// Maps
import { AgmCoreModule } from '@agm/core';

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
import { GmapsComponent } from './gmaps/gmaps.component';
import { NewsDisplayComponent } from './news-display/news-display.component';
import { FormContainerComponent } from './form-container/form-container.component';

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
    YoutubeComponent,
    GmapsComponent,
    NewsDisplayComponent,
    FormContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    PdfViewerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAAFOFBm0Aybb2di44tP3XWdrJptueQYFs'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

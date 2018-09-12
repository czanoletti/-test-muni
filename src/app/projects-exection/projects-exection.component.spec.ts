import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsExectionComponent } from './projects-exection.component';

describe('ProjectsExectionComponent', () => {
  let component: ProjectsExectionComponent;
  let fixture: ComponentFixture<ProjectsExectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsExectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsExectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

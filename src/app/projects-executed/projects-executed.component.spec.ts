import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsExecutedComponent } from './projects-executed.component';

describe('ProjectsExecutedComponent', () => {
  let component: ProjectsExecutedComponent;
  let fixture: ComponentFixture<ProjectsExecutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsExecutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsExecutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsPlanifiedComponent } from './projects-planified.component';

describe('ProjectsPlanifiedComponent', () => {
  let component: ProjectsPlanifiedComponent;
  let fixture: ComponentFixture<ProjectsPlanifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsPlanifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsPlanifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpengovComponent } from './opengov.component';

describe('OpengovComponent', () => {
  let component: OpengovComponent;
  let fixture: ComponentFixture<OpengovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpengovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpengovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

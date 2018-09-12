import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VumeComponent } from './vume.component';

describe('VumeComponent', () => {
  let component: VumeComponent;
  let fixture: ComponentFixture<VumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

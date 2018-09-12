import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketConsultationComponent } from './ticket-consultation.component';

describe('TicketConsultationComponent', () => {
  let component: TicketConsultationComponent;
  let fixture: ComponentFixture<TicketConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

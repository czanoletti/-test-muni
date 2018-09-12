import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalastadosComponent } from './balastados.component';

describe('BalastadosComponent', () => {
  let component: BalastadosComponent;
  let fixture: ComponentFixture<BalastadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalastadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalastadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

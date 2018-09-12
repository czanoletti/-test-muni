import { TestBed, inject } from '@angular/core/testing';

import { OpengovService } from './opengov.service';

describe('OpengovService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpengovService]
    });
  });

  it('should be created', inject([OpengovService], (service: OpengovService) => {
    expect(service).toBeTruthy();
  }));
});

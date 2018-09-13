import { TestBed, inject } from '@angular/core/testing';

import { VumeService } from './vume.service';

describe('VumeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VumeService]
    });
  });

  it('should be created', inject([VumeService], (service: VumeService) => {
    expect(service).toBeTruthy();
  }));
});

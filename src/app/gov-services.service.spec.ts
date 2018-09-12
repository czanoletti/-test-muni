import { TestBed, inject } from '@angular/core/testing';

import { GovServicesService } from './gov-services.service';

describe('GovServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GovServicesService]
    });
  });

  it('should be created', inject([GovServicesService], (service: GovServicesService) => {
    expect(service).toBeTruthy();
  }));
});

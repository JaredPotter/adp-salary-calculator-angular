import { TestBed } from '@angular/core/testing';

import { AdpApiServiceService } from './adp-api-service.service';

describe('AdpApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdpApiServiceService = TestBed.get(AdpApiServiceService);
    expect(service).toBeTruthy();
  });
});

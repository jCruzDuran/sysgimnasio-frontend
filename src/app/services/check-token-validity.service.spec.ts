import { TestBed } from '@angular/core/testing';

import { CheckTokenValidityService } from './check-token-validity.service';

describe('CheckTokenValidityService', () => {
  let service: CheckTokenValidityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckTokenValidityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

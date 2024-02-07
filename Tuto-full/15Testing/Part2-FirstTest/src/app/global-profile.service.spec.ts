import { TestBed } from '@angular/core/testing';

import { GlobalProfileService } from './global-profile.service';

describe('GlobalProfileService', () => {
  let service: GlobalProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

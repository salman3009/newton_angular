import { TestBed } from '@angular/core/testing';

import { ProfessionListService } from './profession-list.service';

describe('ProfessionListService', () => {
  let service: ProfessionListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessionListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SampleInterceptorService } from './sample-interceptor.service';

describe('SampleInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleInterceptorService = TestBed.get(SampleInterceptorService);
    expect(service).toBeTruthy();
  });
});

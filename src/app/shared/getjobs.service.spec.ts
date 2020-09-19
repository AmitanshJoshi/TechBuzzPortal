import { TestBed } from '@angular/core/testing';

import { GetjobsService } from './getjobs.service';

describe('GetjobsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetjobsService = TestBed.get(GetjobsService);
    expect(service).toBeTruthy();
  });
});

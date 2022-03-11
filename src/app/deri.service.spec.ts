import { TestBed } from '@angular/core/testing';

import { DeriService } from './deri.service';

describe('DeriService', () => {
  let service: DeriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

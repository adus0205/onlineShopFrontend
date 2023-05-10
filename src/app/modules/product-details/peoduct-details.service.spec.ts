import { TestBed } from '@angular/core/testing';

import { PeoductDetailsService } from './product-details.service';

describe('PeoductDetailsService', () => {
  let service: PeoductDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeoductDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

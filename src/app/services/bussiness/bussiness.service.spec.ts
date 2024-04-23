import { TestBed } from '@angular/core/testing';

import { BussinessService } from './bussiness.service';

describe('BussinessService', () => {
  let service: BussinessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BussinessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

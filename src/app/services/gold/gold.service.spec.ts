import { TestBed } from '@angular/core/testing';

import { GoldService } from './gold.service';

describe('GoldService', () => {
  let service: GoldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

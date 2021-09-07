import { TestBed } from '@angular/core/testing';

import { StocksAPIService } from './stocks-api.service';

describe('StocksAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StocksAPIService = TestBed.get(StocksAPIService);
    expect(service).toBeTruthy();
  });
});

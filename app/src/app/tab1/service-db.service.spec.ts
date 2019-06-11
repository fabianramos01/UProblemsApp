import { TestBed } from '@angular/core/testing';

import { ServiceDbService } from './service-db.service';

describe('ServiceDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceDbService = TestBed.get(ServiceDbService);
    expect(service).toBeTruthy();
  });
});

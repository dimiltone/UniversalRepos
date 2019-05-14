import { TestBed } from '@angular/core/testing';

import { RepositoryTypesService } from './repository-types.service';

describe('RepositoryTypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepositoryTypesService = TestBed.get(RepositoryTypesService);
    expect(service).toBeTruthy();
  });
});

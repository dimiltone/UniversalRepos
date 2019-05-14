import { TestBed } from '@angular/core/testing';

import { RepositoryCardService } from './repository-card.service';

describe('RepositoryCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepositoryCardService = TestBed.get(RepositoryCardService);
    expect(service).toBeTruthy();
  });
});

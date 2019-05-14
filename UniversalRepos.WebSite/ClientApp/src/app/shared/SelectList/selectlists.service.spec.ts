import { TestBed } from '@angular/core/testing';

import { SelectlistsService } from './selectlists.service';

describe('SelectlistsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectlistsService = TestBed.get(SelectlistsService);
    expect(service).toBeTruthy();
  });
});

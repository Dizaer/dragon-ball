import { TestBed } from '@angular/core/testing';

import { CharactersAPIService } from './characters-api.service';

describe('CharactersAPIService', () => {
  let service: CharactersAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

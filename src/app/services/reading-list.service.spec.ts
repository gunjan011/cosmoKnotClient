import { TestBed } from '@angular/core/testing';

import { ReadingListService } from './reading-list.service';

describe('ReadingListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReadingListService = TestBed.get(ReadingListService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { JournalEntryService } from './journal-entry.service';

describe('JournalEntryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JournalEntryService = TestBed.get(JournalEntryService);
    expect(service).toBeTruthy();
  });
});

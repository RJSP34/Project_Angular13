import { TestBed } from '@angular/core/testing';

import { MuserviceService } from './muservice.service';

describe('MuserviceService', () => {
  let service: MuserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

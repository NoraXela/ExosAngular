import { TestBed } from '@angular/core/testing';

import { SendIdService } from './send-id.service';

describe('SendIdService', () => {
  let service: SendIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

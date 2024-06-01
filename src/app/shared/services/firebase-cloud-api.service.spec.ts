import { TestBed } from '@angular/core/testing';

import { FirebaseCloudApiService } from './firebase-cloud-api.service';

describe('FirebaseCloudApiService', () => {
  let service: FirebaseCloudApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseCloudApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { RetoPostService } from './reto-post.service';

describe('RetoPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetoPostService]
    });
  });

  it('should be created', inject([RetoPostService], (service: RetoPostService) => {
    expect(service).toBeTruthy();
  }));
});

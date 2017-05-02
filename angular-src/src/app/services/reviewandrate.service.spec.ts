/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReviewandrateService } from './reviewandrate.service';

describe('ReviewandrateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReviewandrateService]
    });
  });

  it('should ...', inject([ReviewandrateService], (service: ReviewandrateService) => {
    expect(service).toBeTruthy();
  }));
});

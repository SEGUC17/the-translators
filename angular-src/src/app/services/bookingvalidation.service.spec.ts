/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BookingvalidationService } from './bookingvalidation.service';

describe('BookingvalidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookingvalidationService]
    });
  });

  it('should ...', inject([BookingvalidationService], (service: BookingvalidationService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomervalidateService } from './customervalidate.service';

describe('CustomervalidateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomervalidateService]
    });
  });

  it('should ...', inject([CustomervalidateService], (service: CustomervalidateService) => {
    expect(service).toBeTruthy();
  }));
});

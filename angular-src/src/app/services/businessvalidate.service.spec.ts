/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BusinessvalidateService } from './businessvalidate.service';

describe('BusinessvalidateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusinessvalidateService]
    });
  });

  it('should ...', inject([BusinessvalidateService], (service: BusinessvalidateService) => {
    expect(service).toBeTruthy();
  }));
});

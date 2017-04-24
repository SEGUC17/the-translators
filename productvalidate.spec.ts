/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductValidateService } from './productvalidate.service';

describe('ProductValidateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductValidateService]
    });
  });

  it('should ...', inject([ProductValidateService], (service: ProductValidateService) => {
    expect(service).toBeTruthy();
  }));
});

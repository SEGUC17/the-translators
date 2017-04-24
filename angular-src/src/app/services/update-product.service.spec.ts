/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UpdateProductService } from './update-product.service';

describe('UpdateProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateProductService]
    });
  });

  it('should ...', inject([UpdateProductService], (service: UpdateProductService) => {
    expect(service).toBeTruthy();
  }));
});

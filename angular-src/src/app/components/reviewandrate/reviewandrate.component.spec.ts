/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReviewandrateComponent } from './reviewandrate.component';

describe('ReviewandrateComponent', () => {
  let component: ReviewandrateComponent;
  let fixture: ComponentFixture<ReviewandrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewandrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewandrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

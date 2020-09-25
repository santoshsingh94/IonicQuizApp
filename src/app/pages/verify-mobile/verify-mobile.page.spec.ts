import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyMobilePage } from './verify-mobile.page';

describe('VerifyMobilePage', () => {
  let component: VerifyMobilePage;
  let fixture: ComponentFixture<VerifyMobilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyMobilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyMobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

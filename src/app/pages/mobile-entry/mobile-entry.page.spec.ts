import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileEntryPage } from './mobile-entry.page';

describe('MobileEntryPage', () => {
  let component: MobileEntryPage;
  let fixture: ComponentFixture<MobileEntryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileEntryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileEntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

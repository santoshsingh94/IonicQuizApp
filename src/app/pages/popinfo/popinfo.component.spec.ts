import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopinfoComponent } from './popinfo.component';

describe('PopinfoComponent', () => {
  let component: PopinfoComponent;
  let fixture: ComponentFixture<PopinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

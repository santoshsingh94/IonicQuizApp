import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleprogresComponent } from './circleprogres.component';

describe('CircleprogresComponent', () => {
  let component: CircleprogresComponent;
  let fixture: ComponentFixture<CircleprogresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleprogresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleprogresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

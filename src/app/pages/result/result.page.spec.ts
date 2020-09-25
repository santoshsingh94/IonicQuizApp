import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultPage } from './result.page';

describe('ResultComponent', () => {
  let component: ResultPage;
  let fixture: ComponentFixture<ResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultPage],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

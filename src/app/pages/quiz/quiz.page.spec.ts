import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPage } from './quiz.page';

describe('QuizComponent', () => {
  let component: QuizPage;
  let fixture: ComponentFixture<QuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuizPage],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../shared/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  constructor(public quizService: QuizService) {}

  ngOnInit() {
    this.quizService.seconds = 0;
    this.quizService.questionInProgres = 0;
    this.quizService.getQuizQuestions().subscribe((data: any) => {
      this.quizService.questions = data;
      console.log(this.quizService.questions);
      this.startTimer();
    });
  }
  startTimer() {
    this.quizService.timer = setInterval(() => {
      this.quizService.seconds++;
    }, 1000);
  }
  Answer(qID, choice) {}
}

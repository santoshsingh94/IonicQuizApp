import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { QuizService } from 'src/app/shared/quiz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  percentResult: number;
  constructor(
    public quizService: QuizService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.percentResult = 0;
    this.quizService.correctAnswerCount = 0;
    if (this.quizService.questions) {
      this.quizService.questions.forEach((e, i) => {
        if (e.answer == this.quizService.questions[i].userAnswer) {
          this.quizService.correctAnswerCount++;
          console.log(this.quizService.correctAnswerCount);
        }
      });
    }
    this.percentResult =
      (this.quizService.correctAnswerCount * 100) /
      this.quizService.questionInProgres;
    console.log(this.percentResult);
  }
}

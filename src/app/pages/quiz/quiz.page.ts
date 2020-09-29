import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../shared/quiz.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  progress = 0;
  progressBar = document.querySelector('.progress-bar');
  intervalId;

  constructor(
    public quizService: QuizService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.quizService.seconds = 0;
    this.quizService.questionInProgres = 0;
    this.quizService.getQuizQuestions().subscribe((data: any) => {
      this.quizService.questions = data;
      console.log(this.quizService.questions);
      console.log(this.quizService.questionInProgres);
      this.startTimer();
    });
    const getDownloadProgress = () => {
      if (this.progress <= 99) {
        this.progress = this.progress + 1;
      } else {
        clearInterval(this.intervalId);
      }
    };
    this.intervalId = setInterval(getDownloadProgress, 1000);
  }
  startTimer() {
    this.quizService.timer = setInterval(() => {
      this.quizService.seconds++;
    }, 1000);
  }
  Answer(qID, choice) {
    console.log(qID + choice);
    this.quizService.questions[
      this.quizService.questionInProgres
    ].userAnswer = choice;

    this.quizService.questionInProgres++;
    if (this.quizService.questionInProgres == 7) {
      clearInterval(this.quizService.timer);
      this.navCtrl.navigateForward('/result');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../shared/quiz.service';
import { NavController } from '@ionic/angular';
//const config = require('../../../config');
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  progress = 0;
  progressBar = document.querySelector('.progress-bar');
  intervalId;
  maxQuestions: number = 10; //config.maxQuestionToDisplay;
  timeForQuestion: number = 0;
  offset: number = 0;
  constructor(
    public quizService: QuizService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.quizService.questionInProgres = 0;
    this.quizService.getQuizQuestions().subscribe((data: any) => {
      this.quizService.questions = data;
      this.timeForQuestion = this.quizService.questions[0].maxTime;
      console.log(this.quizService.questions);
      console.log(this.quizService.questionInProgres);
    });
    const getDownloadProgress = () => {
      console.log(this.timeForQuestion);
      if (this.progress <= 98) {
        this.offset = 100 / this.timeForQuestion;
        this.progress = this.progress + this.offset;
      }
      // else {
      //   clearInterval(this.intervalId);
      // }
    };
    this.intervalId = setInterval(getDownloadProgress, 1000);
  }
  Answer(qID, choice) {
    console.log(qID + choice);
    this.quizService.questions[
      this.quizService.questionInProgres
    ].userAnswer = choice;

    this.quizService.questionInProgres++;
    if (this.quizService.questionInProgres < this.maxQuestions) {
      //reset counter
      this.progress = 0;
      this.timeForQuestion = this.quizService.questions[
        this.quizService.questionInProgres
      ].maxTime;
      console.log(this.timeForQuestion);
    } else this.navCtrl.navigateForward('/result');
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}

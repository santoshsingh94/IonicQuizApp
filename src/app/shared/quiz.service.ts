import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:3000';

  questions: any[];
  seconds: number;
  timer;
  questionInProgres: number;
  correctAnswerCount: number = 0;
  getQuizQuestions() {
    return this.http.get(this.baseUrl + '/api/getallquizquestion');
  }
  getAnswers() {
    var body = this.questions.map((x) => x._id);
    return this.http.post(this.baseUrl + '/api/Answers', body);
  }
}

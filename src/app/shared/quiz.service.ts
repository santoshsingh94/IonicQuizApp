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

  getQuizQuestions() {
    return this.http.get(this.baseUrl + '/api/getallquizquestion');
  }
}

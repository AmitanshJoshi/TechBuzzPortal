import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  readonly apiUrl="http://localhost:61681"; 
  questions : any[];
  seconds :number;
  timer;
  quesProgress : number;
  correctAnsCount : number = 0;


  constructor(private http : HttpClient) { }
  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }
  getQuestions() {
    return this.http.get(this.apiUrl + '/api/Questions');
  }
  getAnswers() {
    debugger;
    var body = this.questions.map(x => x.QnID);
    return this.http.post(this.apiUrl + '/api/Answers', body);
  }
  submitMarks() {
    var body;
    body.Score = this.correctAnsCount;
    body.TimeSpent = this.seconds;
    return this.http.post(this.apiUrl + "/api/UpdateOutput", body);
  }

}

import { Component, OnInit } from '@angular/core';
import { Compiler } from '@angular/core'
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms'
import { TestService } from '../shared/test.service';

@Component({
  selector: 'app-taketest',
  templateUrl: './taketest.component.html',
  styleUrls: ['./taketest.component.css']
})
export class TaketestComponent implements OnInit {

  constructor( private router : Router, private testService : TestService, private _compiler : Compiler) { }

  ngOnInit() {
    this._compiler.clearCache();
    if (parseInt(localStorage.getItem('seconds')) > 0) {
      this.testService.seconds = parseInt(localStorage.getItem('seconds'));
      this.testService.quesProgress = parseInt(localStorage.getItem('qnProgress'));
      this.testService.questions = JSON.parse(localStorage.getItem('qns'));
      if (this.testService.quesProgress == 10)
        this.router.navigate(['/result']);
      else
        this.startTimer();
    }
    else {
      this.testService.seconds = 0;
      this.testService.quesProgress = 0;
      this.testService.getQuestions().subscribe(
        (data: any) => {
          this.testService.questions = data;
          this.startTimer();
        }
      );
    }
  }

  startTimer() {
    this.testService.timer = setInterval(() => {
      this.testService.seconds++;
      localStorage.setItem('seconds', this.testService.seconds.toString());
    }, 1000);
  }

  Answer(qID, choice) {
    this.testService.questions[this.testService.quesProgress].answer = choice;
    localStorage.setItem('questions', JSON.stringify(this.testService.questions));
    this.testService.quesProgress++;
    localStorage.setItem('quesProgress', this.testService.quesProgress.toString());
    if (this.testService.quesProgress == 10) {
      clearInterval(this.testService.timer);
      this.router.navigate(['/result']);
    }
  }
  

}

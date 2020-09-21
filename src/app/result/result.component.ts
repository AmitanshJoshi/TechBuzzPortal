import { Component, OnInit } from '@angular/core';
import { TestService } from '../shared/test.service';
import { Router } from '@angular/router';
import { ChartType } from 'chart.js';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  frontEnd  : number = 0;
  backend : number = 0;
  database : number = 0;
  HTML : number =0;
  CSS : number = 0;
 
  constructor(private testService : TestService, private router : Router) { }

  ngOnInit() {
    if (parseInt(localStorage.getItem('quesProgress')) == 10) {
      this.testService.seconds = parseInt(localStorage.getItem('seconds'));
      this.testService.quesProgress = parseInt(localStorage.getItem('quesProgress'));
      this.testService.questions = JSON.parse(localStorage.getItem('questions'));
      this.testService.getAnswers().subscribe(
        (data: any) => {
          this.testService.correctAnsCount = 0;
          this.testService.questions.forEach((e, i) => {
            debugger;
            if (e.answer == data[i])
              this.testService.correctAnsCount++;
              if ( e.QuesType == 'FrontEnd' && e.answer == data[i]) { this.frontEnd++;}
              else if ( e.QuesType == 'Backend' && e.answer == data[i]) { this.backend++; }
              else if ( e.QuesType == 'Database' && e.answer == data[i]) { this.database++; }
              else if ( e.QuesType == 'HTML' && e.answer == data[i]) { this.HTML++; }
              else if ( e.QuesType == 'CSS' && e.answer == data[i]) {this.CSS++;}
            e.correct = data[i];
          });
        }
      );
      
    }
    else{
      this.router.navigate(['/taketest']);}
      
  }
   pieChartLabels : string[] = ['Front-End', 'Back_end', 'Database', 'HTML', 'CSS'];
   pieChartData : number[] = [1, 2, 2, 1,2];
   pieChartType : string = 'pie';
}

import { Component, OnInit } from '@angular/core';
import { GetjobsService } from '../shared/getjobs.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  constructor( private getjobs : GetjobsService) { }
  allJobs : Object;
  ngOnInit() {
       this.getAllJobs();
  }

  getAllJobs(){
  this.getjobs.getAllJobs().subscribe(
    //  (data : any) => 
    //  this.getjobs.jobs = data
    response => { this.allJobs = response }
     );

  }
  
  jobsByTitle(title) {
  this.getjobs.getJobsByTitle(title).subscribe(
    (data : any []) =>
    this.getjobs.jobs = data
  );
  }
}

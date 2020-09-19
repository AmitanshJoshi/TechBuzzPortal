import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetjobsService {

  readonly jobUrl = "http://localhost:61681";
  jobs : any[];

  constructor( private http : HttpClient) { }

  getAllJobs() {
    return this.http.get( this.jobUrl + "/api/jobs");
  }

  getJobsByTitle(data : any) {
    return this.http.get( this.jobUrl + "description=" +data);
  }
}

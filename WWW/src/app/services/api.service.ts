import { TimeLog } from '../interfaces/timeLog';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';


@Injectable({ providedIn: 'root' })
export class ApiService {

  //Url to the API
  ApiURL: string = "https://localhost:7059"


  constructor(private http: HttpClient) { }


  //Service with observable, to provide data from the API
  getTimeLogs(): Observable<TimeLog[]> {
    return this.http.get<TimeLog[]>(this.ApiURL + '/Get/TimeLogs');
  }


  //Service with observable, to post data to the API and returning the result
  postTimeLogs(dataToApi: any) {
    console.debug('dataToAPI', dataToApi)//DEBUG
    return this.http.post<any>(this.ApiURL + '/Post/TimeLogs', dataToApi);
  }
}


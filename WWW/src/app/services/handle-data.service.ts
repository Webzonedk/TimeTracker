import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TimeLog } from '../interfaces/timeLog';
import { ApiService } from '../services/api.service';

@Injectable({ providedIn: 'root' })

export class HandleDataService {
  timeLogs$: BehaviorSubject<TimeLog[]> = new BehaviorSubject<TimeLog[]>([]);
  _timeLogs: TimeLog[] = [];
  startTime: Date = new Date();
  stopTime: Date = new Date();
  timeDifference: number = 0;


  constructor(private apiService: ApiService) { }

  //Method to post the logs
  postLog(values: any) {
    values.timeStart = new Date(`${values.date} ${values.timeStart}`);
    values.timeStop = new Date(`${values.date} ${values.timeStop}`);
    values.timeUsedInMinutes = (values.timeStop.getTime() - values.timeStart.getTime()) / 60000;
    let hours = Math.floor(values.timeUsedInMinutes / 60)
    let minutes = values.timeUsedInMinutes % 60;
    values.timeUsedOutput = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2);
    console.log('timeUsedOutput: ', values.timeUsedOutput) //DEBUG
    console.log('value: ', values); //DEBUG
    this.apiService.postTimeLogs(values).subscribe(() => {
      next:

      complete:
      this.getLogs();
    })
  }

  //method to get the logs
  getLogs() {
    this.apiService.getTimeLogs().subscribe((timeLogs: TimeLog[]) => {
      next:
      console.log('logs: ', timeLogs);//DEBUG
      this._timeLogs = timeLogs;

      complete:
      console.log('Complete: ', this._timeLogs);//DEBUG
      this.timeLogs$.next(this._timeLogs)
    });
  }

}

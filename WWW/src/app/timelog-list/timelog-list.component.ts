import { Component, OnInit } from '@angular/core';
import { HandleDataService } from '../services/handle-data.service';
import { TimeLog } from '../interfaces/timeLog';


@Component({
  selector: 'app-timelog-list',
  templateUrl: './timelog-list.component.html',
  styleUrls: ['./timelog-list.component.scss']
})


export class TimelogListComponent implements OnInit {
  timeLogList: TimeLog[] = [];
  constructor(private handleDataService: HandleDataService) {

    this.handleDataService.timeLogs$.subscribe((logsFromApi: TimeLog[]) => {
      next:
      if (this.timeLogList.length !== logsFromApi.length) {
        this.timeLogList = logsFromApi;
      }
    });
  }


  ngOnInit() {
    this.getTimeLogs();
  }


  getTimeLogs(){
    this.handleDataService.getLogs()
  }

}

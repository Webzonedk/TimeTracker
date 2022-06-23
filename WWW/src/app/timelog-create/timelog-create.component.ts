import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HandleDataService } from '../services/handle-data.service';
import { TimeLog } from '../interfaces/timeLog';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-timelog-create',
  templateUrl: './timelog-create.component.html',
  styleUrls: ['./timelog-create.component.scss']
})
export class TimelogCreateComponent implements OnInit {
  //handleDataService: any;


   //constructor(private formBuilder: FormBuilder) {}
 constructor(private formBuilder: FormBuilder, private handleDataService: HandleDataService) {}


  //validation not activated due to errors
    title = 'timeLogs';
    addLogForm = this.formBuilder.group({
    date: ['', Validators.required],
    timeStart: ['', Validators.required],
    timeStop: ['', Validators.required],
    employeeName: ['', Validators.required],
    customer: ['', Validators.required],
    contactPerson: ['', Validators.required],
    description: ['', Validators.required],
    descriptionInternal: ['', Validators.required],
  })


  ngOnInit():void {
  }

  onSubmit() {
     this.handleDataService.postLog(this.addLogForm.value);
    //  // console.log(new Date(`${this.addLogForm.value.date} ${this.addLogForm.value.timeStart}`));
    //  this.addLogForm.value.timeStart = new Date(`${this.addLogForm.value.date} ${this.addLogForm.value.timeStart}`);
    //  this.addLogForm.value.timeStop = new Date(`${this.addLogForm.value.date} ${this.addLogForm.value.timeStop}`);
    //  this.addLogForm.value.timeUsedInMinutes = (this.addLogForm.value.timeStop.getTime() - this.addLogForm.value.timeStart.getTime())/60000;

    //  console.log('value:', this.addLogForm.value);
     this.addLogForm.reset();
  }

}

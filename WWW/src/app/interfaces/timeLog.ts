import { Time } from "@angular/common";

export interface TimeLog {
  date: Date;
  employeeName: string;
  customer: string;
  contactPerson: string;
  description: string;
  descriptionInternal: string;
  timeStart: Date;
  timeStop: Date;
  timeUsedInMinutes: Number;
  timeUsedOutput:string;
}

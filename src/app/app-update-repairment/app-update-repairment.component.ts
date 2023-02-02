import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RepairmentService } from "../api";

@Component({
  selector: 'app-app-update-repairment',
  templateUrl: './app-update-repairment.component.html',
  styleUrls: ['./app-update-repairment.component.css']
})
export class AppUpdateRepairmentComponent {
  @Input() repairment: any;
  @Output() updated = new EventEmitter<any>();

  onUpdate() {

    this.updated.emit(this.repairment);
    this.repairmentService.apiRepairmentEmployeeIdPut(this.repairment.id, this.repairment.employeeId, this.repairment).subscribe(
      result => {
        console.log('Repairment updated successfully', result);
      },
      error => {
        console.error('Error updating repairment', error);
      }
    );

  }
}
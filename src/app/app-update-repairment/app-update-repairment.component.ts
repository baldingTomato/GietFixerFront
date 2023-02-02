import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  }
}
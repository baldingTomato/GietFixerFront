import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUpdateRepairmentComponent } from './app-update-repairment.component';

describe('AppUpdateRepairmentComponent', () => {
  let component: AppUpdateRepairmentComponent;
  let fixture: ComponentFixture<AppUpdateRepairmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppUpdateRepairmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppUpdateRepairmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

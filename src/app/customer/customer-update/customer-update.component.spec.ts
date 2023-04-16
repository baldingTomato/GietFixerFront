import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCustomerComponent } from './customer-update.component';

describe('AppUpdateRepairmentComponent', () => {
  let component: UpdateCustomerComponent;
  let fixture: ComponentFixture<UpdateCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

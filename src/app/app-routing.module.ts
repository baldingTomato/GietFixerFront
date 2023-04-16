import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { RepairmentComponent } from './repairment/repairments-view/repairment-view.component';
import { CustomerComponent } from './customer/customer-view/customer-view.component';
import { ItemComponent } from './item/item-view/item-view.component';
import { LogoutComponent } from './login/logout.component';
import { AuthGuard } from './auth-service/authentication-guard';
import { PaymentComponent } from './payment/payment.component';
import { UpdateRepairmentComponent } from './repairment/repairment-update/update-repairment.component';
import { UpdateItemComponent } from './item/item-update/item-update.component';
import { EmployeeComponent } from './employee/employee-view/employee-view.component';
import { UpdateEmployeeComponent } from './employee/employee-update/employee-update.component';
import { UpdateCustomerComponent } from './customer/customer-update/customer-update.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent ,canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },   
  { path: 'profile', component: ProfileComponent , canActivate: [AuthGuard]},
  { path: 'user', component: BoardUserComponent , canActivate: [AuthGuard]},
  { path: 'mod', component: BoardModeratorComponent , canActivate: [AuthGuard]},
  { path: 'admin', component: BoardAdminComponent , canActivate: [AuthGuard]},
  { path: 'customer', component: CustomerComponent, canActivate: [AuthGuard] },
  { path: 'item', component: ItemComponent, canActivate: [AuthGuard] },
  { path: 'repairment', component: RepairmentComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'update/:id', component: UpdateRepairmentComponent },
  { path: 'updateItem/:id', component: UpdateItemComponent },
  { path: 'updateCustomer/:id', component: UpdateCustomerComponent },
  { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard] },
  { path: 'updateEmployee/:id', component: UpdateEmployeeComponent },
  { path: 'payment', component: PaymentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


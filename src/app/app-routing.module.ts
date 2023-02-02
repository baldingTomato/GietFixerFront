import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { RepairmentComponent } from './repairment/repairment.component';
import { LogoutComponent } from './login/logout.component';
import { AuthGuard } from './api/service/authentication-guard';
import { AppUpdateRepairmentComponent } from './app-update-repairment/app-update-repairment.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent ,canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },   
  { path: 'profile', component: ProfileComponent , canActivate: [AuthGuard]},
  { path: 'user', component: BoardUserComponent , canActivate: [AuthGuard]},
  { path: 'mod', component: BoardModeratorComponent , canActivate: [AuthGuard]},
  { path: 'admin', component: BoardAdminComponent , canActivate: [AuthGuard]},
  { path: 'repairment', component: RepairmentComponent , canActivate: [AuthGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'update/:id', component: AppUpdateRepairmentComponent },
  { path: 'payment', component: PaymentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


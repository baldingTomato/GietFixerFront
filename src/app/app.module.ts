import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { RepairmentComponent } from './repairment/repairments-view/repairment-view.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';
import { ApiModule, Configuration, ConfigurationParameters } from './api';
import { AuthService } from './auth-service/authentication-service';
import { LogoutComponent } from './login/logout.component';
import { UpdateRepairmentComponent } from './repairment/repairment-update/update-repairment.component';
import { UpdateItemComponent } from './item/item-update/item-update.component';
//import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RepairmentsAddComponent } from './repairment/repairments-add/repairments-add.component';
import { EmployeeComponent } from './employee/employee-view/employee-view.component';
import { UpdateEmployeeComponent } from './employee/employee-update/employee-update.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { CustomerComponent } from './customer/customer-view/customer-view.component';
import { ItemComponent } from './item/item-view/item-view.component';
import { ItemAddComponent } from './item/item-add/item-add.component';


const configParams: ConfigurationParameters = {
  basePath: 'https://localhost:7167'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    RepairmentComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    LogoutComponent,
    UpdateRepairmentComponent,
    RepairmentsAddComponent,
    EmployeeComponent,
    EmployeeAddComponent,
    CustomerComponent,
    ItemComponent,
    ItemAddComponent,
    UpdateItemComponent,
    UpdateEmployeeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ApiModule,
   // NgxDatatableModule,
    ReactiveFormsModule
  ],

  providers: [
    { provide: Configuration, useValue: new Configuration(configParams),
       }, 
       AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
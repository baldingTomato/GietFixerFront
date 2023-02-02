import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { RepairmentComponent } from './repairment/repairment.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { ApiModule, Configuration as ApiConfiguration } from './api/api.module';
import { ConfigurationParameters } from './api';
import { AppUpdateRepairmentComponent } from './app-update-repairment/app-update-repairment.component';

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
    AppUpdateRepairmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ApiModule
  ],

  providers: [
    { provide: ApiConfiguration, useValue: new ApiConfiguration(configParams) }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
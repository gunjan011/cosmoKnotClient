import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './unprotectedViews/homepage/homepage.component';
import { UserProfileComponent } from './protectedViews/user-profile/user-profile.component';
import { AboutComponent } from './unprotectedViews/about/about.component';
import { MissionComponent } from './unprotectedViews/mission/mission.component';
import { ApiSearchComponent } from './protectedViews/api-search/api-search.component';
import { JournalComponent } from './protectedViews/journal/journal.component';

import { 
  MatCheckboxModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatCardModule
 } from '@angular/material';
//import { JwtModule } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './unprotectedViews/login/login.component';
import { RegisterAdminComponent } from './unprotectedViews/register-admin/register-admin.component';
import { LoginDiagBoxComponent } from './unprotectedViews/login-diag-box/login-diag-box.component';
import { RegisterAdminDiagBoxComponent } from './unprotectedViews/register-admin-diag-box/register-admin-diag-box.component';
import { CreateUserComponent } from './protectedViews/create-user/create-user.component';
import { CreateUserDiagBoxComponent } from './protectedViews/create-user-diag-box/create-user-diag-box.component';
import { ApodComponent } from './unprotectedViews/apod/apod.component';
import { ApodService } from './services/apod.service';
import { SiteNavComponent } from './Navs/site-nav/site-nav.component';
import { UserNavComponent } from './Navs/user-nav/user-nav.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserProfileComponent,
    AboutComponent,
    MissionComponent,
    ApiSearchComponent,
    JournalComponent,
    LoginComponent,
    RegisterAdminComponent,
    LoginDiagBoxComponent,
    RegisterAdminDiagBoxComponent,
    CreateUserComponent,
    CreateUserDiagBoxComponent,
    ApodComponent,
    SiteNavComponent,
    UserNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatCardModule,
    //JwtModule,
    BrowserAnimationsModule
  ],
  providers: [
    HttpClient,
    ApodService
  ],
  entryComponents:[
    LoginDiagBoxComponent,
    CreateUserDiagBoxComponent,
    RegisterAdminDiagBoxComponent
  ],
  bootstrap: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    RegisterAdminComponent
  ]
})
export class AppModule { }

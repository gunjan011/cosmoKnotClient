import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AboutComponent } from './about/about.component';
import { MissionComponent } from './mission/mission.component';
import { ApiSearchComponent } from './protectedViews/api-search/api-search.component';
import { JournalComponent } from './protectedViews/journal/journal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    UserProfileComponent,
    AboutComponent,
    MissionComponent,
    ApiSearchComponent,
    JournalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

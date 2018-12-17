import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionComponent } from './unprotectedViews/mission/mission.component';

import { HomepageComponent } from './unprotectedViews/homepage/homepage.component';
import { AboutComponent } from './unprotectedViews/about/about.component';


import { UserProfileComponent } from './protectedViews/user-profile/user-profile.component';
import { ApiSearchComponent } from './protectedViews/api-search/api-search.component';
import { JournalComponent } from './protectedViews/journal/journal.component';

const exposed_routes : Routes = [
  { path : '', redirectTo : '/home', pathMatch : 'full' },
  { path : 'about', component : AboutComponent },
  { path : 'mission', component : MissionComponent },
  { path : 'home', component : HomepageComponent }
];

const protected_routes : Routes = [
  { path : 'myprofile', component : UserProfileComponent },
  { path : 'journal_entry', component : JournalComponent },
  { path : 'reading_list', component : ApiSearchComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(exposed_routes),
    RouterModule.forRoot(protected_routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

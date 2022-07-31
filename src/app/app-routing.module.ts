import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { EventsComponent } from './components/pages/events/events.component';
import { MusicComponent } from './components/pages/music/music.component';
import { ApplicationStateService } from './services/application-state.service';


const desktop_routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},

  {path: 'home', component: HomeComponent},
  {path: 'events', component: EventsComponent},
  {path: 'music', component: MusicComponent},

  {path: '**', redirectTo: '/home', pathMatch: 'full'},
  
];

const mobile_routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},

  {path: 'home', component: HomeComponent},
  {path: 'events', component: EventsComponent},
  {path: 'music', component: MusicComponent},

  {path: '**', redirectTo: '/home', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(desktop_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  public constructor(private router: Router,
    private applicationStateService: ApplicationStateService) {

    if (applicationStateService.getIsMobileResolution()) {
      router.resetConfig(mobile_routes);
    }
  }

 }

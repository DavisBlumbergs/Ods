import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { EventsComponent } from './components/pages/events/events.component';
import { MusicComponent } from './components/pages/music/music.component';
import { PrivacyComponent } from './components/pages/static/privacy/privacy.component';
import { ContactusComponent } from './components/pages/static/contactus/contactus.component';
import { FaqComponent } from './components/pages/static/faq/faq.component';
import { TermsComponent } from './components/pages/static/terms/terms.component';
import { CookiesComponent } from './components/pages/static/cookies/cookies.component';


const desktop_routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},

  {path: 'home', component: HomeComponent},
  {path: 'events', component: EventsComponent},
  {path: 'music', component: MusicComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'cookies', component: CookiesComponent},

  {path: '**', redirectTo: '/home', pathMatch: 'full'},
  
];

const mobile_routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},

  {path: 'home', component: HomeComponent},
  {path: 'events', component: EventsComponent},
  {path: 'music', component: MusicComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'contactus', component: ContactusComponent},

  {path: '**', redirectTo: '/home', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(desktop_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  public constructor() {

  }

 }

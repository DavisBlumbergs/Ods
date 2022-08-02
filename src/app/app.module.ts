import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { EventsComponent } from './components/pages/events/events.component';
import { MusicComponent } from './components/pages/music/music.component';
import { CarouselComponent } from './components/pages/home/carousel/carousel.component';
import { PrivacyComponent } from './components/pages/static/privacy/privacy.component';
import { ContactusComponent } from './components/pages/static/contactus/contactus.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    EventsComponent,
    MusicComponent,
    CarouselComponent,
    PrivacyComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

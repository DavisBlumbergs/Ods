import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

export interface Event {
  month: string;
  date: number;
  locationName: string;
  stage: string;
  ticketUrl: string;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.sass']
})

export class EventsComponent implements OnInit {

  hideMobileView = true

  cols = 0
  
  gridByBreakpoint = {
    xl: 5,
    lg: 5,
    md: 5,
    sm: 2,
    xs: 1
  }

  eventList: Event[] = [
    {month: 'Augusts', date: 15, locationName: 'Baldones Festivals', stage: 'Main Stage', ticketUrl: ''},
    {month: 'Septembris', date: 13, locationName: 'Waterfest', stage: 'X Stage', ticketUrl: ''},
    {month: 'Oktobris', date: 27, locationName: 'Positivus', stage: 'Y Stage', ticketUrl: ''},
    {month: 'Novembris', date: 9, locationName: 'Ghetto Games', stage: '', ticketUrl: ''},
    {month: 'Decembris', date: 7, locationName: 'Summer Sound', stage: 'Main Stage', ticketUrl: ''},
    {month: 'Janvaris', date: 22, locationName: 'Rigas Svetki', stage: 'Main Stage', ticketUrl: ''},
    {month: 'Februaris', date: 11, locationName: 'Jaunais Vilnis', stage: 'Main Stage', ticketUrl: ''},
  ]

  constructor(private responsive: BreakpointObserver) { 
  }

  ngOnInit(): void {

    this.responsive.observe([
      Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape,
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait])
    .subscribe(result => {
      const breakpoints = result.breakpoints;
      this.hideMobileView = true

      if (breakpoints[Breakpoints.TabletPortrait]) {
        this.cols = this.gridByBreakpoint.sm 
        console.log("screens matches TabletPortrait");
        console.log(this.cols)
      }
      else if (breakpoints[Breakpoints.TabletLandscape]) {
        this.cols = this.gridByBreakpoint.md
        console.log("screens matches TabletLandscape");
        console.log(this.cols)
      }
      else if (breakpoints[Breakpoints.HandsetLandscape]) {
        this.hideMobileView = false
        this.cols = this.gridByBreakpoint.sm
        console.log("screens matches HandsetLandscape");
        console.log(this.cols)
      }
      else if (breakpoints[Breakpoints.HandsetPortrait]) {
        this.hideMobileView = false
        this.cols = this.gridByBreakpoint.xs
        console.log("screens matches HandsetPortrait");
        console.log(this.cols)
      }

    });

  }

}

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.sass']
})
export class MusicComponent implements OnInit {

  hideMobileView = true

  cols = 0
  
  gridByBreakpoint = {
    xl: 5,
    lg: 5,
    md: 5,
    sm: 2,
    xs: 1
  }

  constructor(private responsive: BreakpointObserver) { }

  ngOnInit(): void {

    this.responsive.observe([
      Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape,
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait,
      Breakpoints.WebPortrait,
      Breakpoints.WebLandscape])
    .subscribe(result => {
      const breakpoints = result.breakpoints;
      this.hideMobileView = true

      if (breakpoints[Breakpoints.TabletPortrait]) {
        this.cols = this.gridByBreakpoint.sm 
        this.hideMobileView = false
        console.log("screens matches TabletPortrait");
        console.log(this.cols)
      }
      else if (breakpoints[Breakpoints.TabletLandscape]) {
        this.cols = this.gridByBreakpoint.sm
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
      else if (breakpoints[Breakpoints.WebPortrait]) {
        this.hideMobileView = true
        this.cols = this.gridByBreakpoint.xs
        console.log("screens matches WebPortrait");
        console.log(this.cols)
      }
      else if (breakpoints[Breakpoints.WebLandscape]) {
        this.hideMobileView = true
        this.cols = this.gridByBreakpoint.sm
        console.log("screens matches WebLandscape");
        console.log(this.cols)
      }

    });

  }

}

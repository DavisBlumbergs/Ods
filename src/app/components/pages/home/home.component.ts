import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public isMenuOpen: boolean = false;

  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }

  @ViewChild(MatMenuTrigger)
  trigger!: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }

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
      Breakpoints.HandsetPortrait])
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
        this.cols = this.gridByBreakpoint.md
        this.hideMobileView = true
        console.log("screens matches TabletLandscape");
        console.log(this.cols)
      }
      else if (breakpoints[Breakpoints.HandsetLandscape]) {
        this.hideMobileView = true
        this.cols = this.gridByBreakpoint.md
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

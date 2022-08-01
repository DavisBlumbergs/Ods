import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

export interface Music {
  title: string;
  coverPhoto: string;
  merchUrl: string;
  youtubeUrl: string;
  spotifyUrl: string;
  soundcloudUrl: string;
}

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

  musicList: Music[] = [
    {title: 'Nestāsti Mammai', coverPhoto: '../../../../assets/images/Nestasti_Mammai_Cover3.jpg', merchUrl: '', youtubeUrl: 'https://www.youtube.com/watch?v=OGhSur4CZXo&list=PLjdR_mk75_pIooVqfUXZWFMIYi4Nggb52', spotifyUrl: 'https://open.spotify.com/album/7tm8UD5zzTLCVE34Wmltcc',soundcloudUrl:''},
    {title: 'Piepist Seju', coverPhoto: '../../../../assets/images/Piepist_Seju_Cover.jpg', merchUrl: '', youtubeUrl: 'https://www.youtube.com/watch?v=lyspFucl1sM', spotifyUrl: 'https://open.spotify.com/track/0fyfPkT2929pU4hsqJqp7y?si=e1dac2831c744c16',soundcloudUrl:'https://soundcloud.com/user-51170541/piepist-seju'},
    {title: 'Goda Vārds 4', coverPhoto: '../../../../assets/images/Goda_Vards_4_Cover.jpg', merchUrl: '', youtubeUrl: 'https://www.youtube.com/watch?v=EZmOsQoITSg&list=OLAK5uy_kHOdAR_AeRhoHRtTd3GiyKl3G9U_UPSak', spotifyUrl: 'https://open.spotify.com/album/3isqZZkkDC4gYIt2zwcdb6',soundcloudUrl:'https://soundcloud.com/user-51170541/piepist-seju'},
    {title: 'Nestāsti Mammai', coverPhoto: '../../../../assets/images/Nestasti_Mammai_Cover2.jpg', merchUrl: '', youtubeUrl: 'https://www.youtube.com/watch?v=OGhSur4CZXo&list=PLjdR_mk75_pIooVqfUXZWFMIYi4Nggb52', spotifyUrl: 'https://open.spotify.com/album/7tm8UD5zzTLCVE34Wmltcc',soundcloudUrl:''},
    {title: 'Buļļu Gaļa', coverPhoto: '../../../../assets/images/Bullu_Gala_Cover.jpg', merchUrl: '', youtubeUrl: 'https://www.youtube.com/watch?v=qL57RZar2tE', spotifyUrl: '',soundcloudUrl:''},
  ]

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
        this.cols = this.gridByBreakpoint.sm
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

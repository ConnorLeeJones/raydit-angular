import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recent-artist-ratings',
  templateUrl: './recent-artist-ratings.component.html',
  styleUrls: ['./recent-artist-ratings.component.css']
})
export class RecentArtistRatingsComponent {

  @Input()
  ratings: Array<any>;  

  constructor() {}

}

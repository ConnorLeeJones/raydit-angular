import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-artist-ratings',
  templateUrl: './user-artist-ratings.component.html',
  styleUrls: ['./user-artist-ratings.component.css']
})
export class UserArtistRatingsComponent {

  @Input()
  ratings: Array<any>;  

  constructor() {}

}

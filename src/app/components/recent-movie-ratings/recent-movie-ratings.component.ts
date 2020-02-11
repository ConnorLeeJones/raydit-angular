import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recent-movie-ratings',
  templateUrl: './recent-movie-ratings.component.html',
  styleUrls: ['./recent-movie-ratings.component.css']
})
export class RecentMovieRatingsComponent {

  @Input()
  ratings: Array<any>;  

  constructor() {}

}

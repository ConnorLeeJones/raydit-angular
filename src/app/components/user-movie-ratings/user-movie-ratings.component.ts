import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-movie-ratings',
  templateUrl: './user-movie-ratings.component.html',
  styleUrls: ['./user-movie-ratings.component.css']
})
export class UserMovieRatingsComponent {

  @Input()
  ratings: Array<any>;  

  constructor() { }

}

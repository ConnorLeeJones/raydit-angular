import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-rating',
  templateUrl: './movie-rating.component.html',
  styleUrls: ['./movie-rating.component.css']
})
export class MovieRatingComponent implements OnInit {

  currentRate: number = 0;

  constructor(private userService: UserService) { }

  @Input()
  movie: Movie;

  ngOnInit() {
    console.log(this.movie);
    this.userService.getUserMovieRating(this.movie.id).subscribe(rating =>  {
      this.currentRate = rating.rating;
      console.log(this.currentRate);
      });
  }

  onRateChange(event: number) {
    if (!isNaN(event)){
      console.log(event);
      // this.movie.id = this.album.id;
      this.userService.rateMovie(event, this.movie).subscribe(res => console.log(res))
    }
  }

}

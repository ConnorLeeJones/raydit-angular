import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Artist } from 'src/app/models/artist';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {


  currentRate: number = 0;

  constructor(private userService: UserService) { }

  @Input()
  artist: Artist;

  ngOnInit() {
    // this.currentRate = 2;
    // this.userService.
    console.log(this.artist);
    this.userService.getUserArtistRating(this.artist.id).subscribe(rating =>  {
      this.currentRate = rating.rating;
      console.log(this.currentRate);
      });
  }

  getRating(){
    // this.userService.getUserArtistRating()
  }

  // rate(){
  //   console.log(this.currentRate);
  // }

  onRateChange(event: number) {
    if (!isNaN(event)){
      console.log(event);
      this.userService.rateArtist(event, this.artist).subscribe(res => console.log(res))
    }
  }

}

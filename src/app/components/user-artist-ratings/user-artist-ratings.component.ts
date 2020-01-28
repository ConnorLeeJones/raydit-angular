import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { Rating } from 'src/app/models/rating';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-artist-ratings',
  templateUrl: './user-artist-ratings.component.html',
  styleUrls: ['./user-artist-ratings.component.css']
})
export class UserArtistRatingsComponent implements OnInit {

  @Input()
  id: number;
  @Input()
  user: User;

  ratings: Rating[];


  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getArtistRatings();
  }

  getArtistRatings(){
    this.userService.getUserRatings(this.id).subscribe(ratings => {
      this.ratings = ratings;
      if (this.ratings.length)
        this.sortByRating();
    });
  }


  sortByRating(){
    this.ratings.sort((a,b) => b.rating - a.rating);
  }

  sortByRecent(){
    this.ratings.sort((a,b) => <any>new Date(b.modifiedDate) - <any>new Date(a.modifiedDate));
  }

  sortAlphabetically(){
    this.ratings.sort((a,b)=>a.artist.name.localeCompare(b.artist.name));
  }


}

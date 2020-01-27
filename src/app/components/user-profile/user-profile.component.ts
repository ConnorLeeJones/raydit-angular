import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Artist } from 'src/app/models/artist';
import { SearchService } from 'src/app/services/search.service';
import { Rating } from 'src/app/models/rating';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User;
  artists: Artist[];
  ratings: Rating[];
  id = +this.route.snapshot.paramMap.get('id');


  constructor(private userService: UserService,
    private searchService: SearchService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.userService.getuserById(this.id).subscribe(user => this.user = user);
    // this.searchService.getArtistsByUser(this.id).subscribe(artists => { 
    //   this.artists = artists;
    //   console.log(this.artists);
    //   if (this.artists.length == 0){
    //     this.artists = null;
    //   }
    // });

    this.userService.getUserRatings(this.id).subscribe(ratings => {
      this.ratings = ratings;
      console.log(ratings);
      if (this.ratings.length == 0){
        this.ratings = null;
      }
      this.sortByRating();
      // this.sortByRecent();
    });
  }

  sortByRating(){
    this.ratings.sort((a,b) => b.rating - a.rating);
  }

  sortByRecent(){
    this.ratings.sort((a,b) => <any>new Date(b.modifiedDate) - <any>new Date(a.modifiedDate));
  }

}

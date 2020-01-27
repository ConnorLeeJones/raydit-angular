import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Artist } from 'src/app/models/artist';
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
  selected: string;
  unselected: string;
  id = +this.route.snapshot.paramMap.get('id');
  sortOptions = ["modifiedDate", "rating"];


  constructor(private userService: UserService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.selected = "Artists";
    this.unselected = "Albums";

    this.userService.getuserById(this.id).subscribe(user => this.user = user);

    this.getArtistRatings();
  }

  getArtistRatings(){
    this.userService.getUserRatings(this.id).subscribe(ratings => {
      this.ratings = ratings;
      console.log(ratings);
      if (this.ratings.length == 0){
        this.ratings = null;
      }
      this.sortByRating();
    });
  }

  getAlbumRatings(){
    this.userService.getUserAlbumRatings(this.id).subscribe(ratings => {
      this.ratings = ratings;
      console.log(ratings);
      if (this.ratings.length == 0){
        this.ratings = null;
      }
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

  switchRatings($event: any){
    console.log($event.target.innerText);
    let temp = this.unselected;
    this.unselected = this.selected;
    this.selected = temp;
    // this.getAlbumRatings();
  }



}

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

  // ratings: Rating[];

  page: number = 1;
  // userId: number = 2;
  ratings: Array<any>;  
  pages: Array<number>;
  totalItems: number;
  itemsPerPage: number;




  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getRatings();
  }

  // getArtistRatings(){
  //   this.userService.getUserRatings(this.id).subscribe(ratings => {
  //     this.ratings = ratings;
  //     if (this.ratings.length)
  //       this.sortByRating();
  //   });
  // }


  getRatings(){
    this.userService.getUserPaginatedArtists(this.id, this.page - 1).subscribe(data =>
      {console.log(data);
        this.ratings = data['content'];
        this.pages = new Array(data['totalPages']);
        this.totalItems = data['totalElements'];
        this.itemsPerPage = data['size'];
      },
      (error) => console.log(error.error.message)
      );
  }

  loadPage($event: any){
    console.log($event);
    this.page = $event;
    this.getRatings();
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

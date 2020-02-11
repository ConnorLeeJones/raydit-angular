import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FriendService } from 'src/app/services/friend.service';


@Component({
  selector: 'app-friend-ratings',
  templateUrl: './friend-ratings.component.html',
  styleUrls: ['./friend-ratings.component.css']
})
export class FriendRatingsComponent implements OnInit {

  selected: string;
  options = ["Artists", "Albums", "Movies/TV"];
  friendIds: number[];

  page: number = 1;
  ratings: Array<any>;
  pages: Array<number>;
  totalItems: number;
  itemsPerPage: number;
  sortBy: string = '';
  loading = false;


  constructor(private userService: UserService, private friendService: FriendService) { }

  ngOnInit() {
    this.getUserFriendIds();
    this.selected = this.options[0];
  }

  getSelected($event: any) {
    this.page = 1;
    console.log($event.target.innerText);
    this.options.push(this.selected);
    this.selected = $event.target.innerText;
    this.switchSelection(this.selected);
  }

  switchSelection(option: string) {
    this.selected = option;
    this.options = this.options.filter(obj => obj !== option);
    this.getRatings();
  }

  showArtists() {
    return (this.ratings && this.ratings[0]['artist'])
  }

  showAlbums() {
    return (this.ratings && this.ratings[0]['album'])
  }

  showMovies() {
    return (this.ratings && this.ratings[0]['movie'])
  }

  getRatings() {
    this.loading = true;
    let option = this.selected.toLocaleLowerCase();
    if (option === "movies/tv") {
      option = 'movies';
    }
    this.friendService.getFriendPaginatedRatings(option, this.page - 1).subscribe(data => {
      if (data !== null) {
        console.log(data);
        this.ratings = data['content'];
        this.pages = new Array(data['totalPages']);
        this.totalItems = data['totalElements'];
        this.itemsPerPage = data['size'];
        console.log(this.pages);
      } else {
        console.log('bleh');
        this.ratings = [];
        console.log(this.ratings);
      }
      this.loading = false;
      console.log(this.loading);
    },
      (error) => {
        console.log(error.error.message)
        this.ratings = [];
        this.loading = false;
      }
    );
  }

  loadPage($event: any) {
    console.log($event);
    this.page = $event;
    this.getRatings();
  }

  sort($event: any) {
    let choice = $event['target']['text'];
    console.log(choice);
    if (choice === 'Recent')
      this.sortBy = 'modifiedDate';
    else if (choice === 'Rating')
      this.sortBy = '';
    else if (choice === 'Name')
      this.sortBy = 'name';
    this.getRatings();
  }


  getUserFriendIds() {
    this.userService.getUserFriendIds().subscribe(ids => {
      this.friendIds = ids;
      console.log(this.friendIds);
      if (this.friendIds.length){
        this.switchSelection(this.selected);
      }
    });
  }




}

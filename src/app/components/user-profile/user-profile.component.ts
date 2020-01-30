import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  selected: string;
  id: number;
  user: User;
  options = ["Artists", "Albums"];

  page: number = 1;
  ratings: Array<any>;  
  pages: Array<number>;
  totalItems: number;
  itemsPerPage: number;
  sortBy: string = '';


  constructor(private userService: UserService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.userService.getuserById(this.id).subscribe(user => this.user = user);
    this.selected = this.options[0];
    this.switchSelection(this.selected);
    this.getRatings();
  }

  getSelected($event: any){
    this.page = 1;
    this.sortBy = '';
    console.log($event.target.innerText);
    this.options.push(this.selected);
    this.selected = $event.target.innerText;
    this.switchSelection(this.selected);
    console.log(this.showArtists())
  }

  switchSelection(option: string){
    this.selected = option;
    this.options = this.options.filter(obj => obj !== option);
    this.getRatings();
  }

  showArtists(){
    return (this.ratings && this.ratings[0]['artist'] !== undefined)
  }

  showAlbums(){
    return (this.ratings && this.ratings[0]['album'] !== undefined)
  }

  getRatings(){
    this.userService.getUserPaginatedRatings(this.selected.toLocaleLowerCase(), this.id, this.page - 1, this.sortBy).subscribe(data =>
      {
        if (data !== null){
        this.ratings = data['content'];
        this.pages = new Array(data['totalPages']);
        this.totalItems = data['totalElements'];
        this.itemsPerPage = data['size'];
        }
      },
      (error) => {
        console.log(error.error.message)
        this.ratings = null;
      }
      );
  }

  loadPage($event: any){
    console.log($event);
    this.page = $event;
    this.getRatings();
  }

  sort($event: any){
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


}

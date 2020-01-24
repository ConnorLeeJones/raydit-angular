import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Artist } from 'src/app/models/artist';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User;
  artists: Artist[];
  id = +this.route.snapshot.paramMap.get('id');


  constructor(private userService: UserService,
    private searchService: SearchService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.userService.getuserById(this.id).subscribe(user => this.user = user);
    this.searchService.getArtistsByUser(this.id).subscribe(artists => { 
      this.artists = artists;
      console.log(this.artists);
      if (this.artists.length == 0){
        this.artists = null;
      }
    });
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../../models/artist';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { Album } from '../../models/album';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Rating } from 'src/app/models/rating';
import { RatingComponent } from '../rating/rating.component';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.component.html',
  styleUrls: ['./artist-profile.component.css']
})
export class ArtistProfileComponent implements OnInit {

  artist: Artist;
  albums: Album[];
  show: boolean;
  artistIds: number[];
  id = +this.route.snapshot.paramMap.get('id');
  isFollowing: boolean;


  constructor(private searchService: SearchService,
              private route: ActivatedRoute, private authService: AuthenticationService,
              private userService: UserService) { 

  }

  ngOnInit(): void {
    this.getProfile();
  }



  getProfile(){
    this.searchService.getArtistsIdsByUser(this.authService.currentUserValue.id).subscribe(ids => {
      this.artistIds = ids;
      console.log(this.artistIds);
      });

    console.log(this.id);

    this.searchService.getArtist(this.id).subscribe(artist => {
    this.artist = artist;
    console.log(this.artist.name);
    this.isFollowing = this.isAlreadyFollowing();
    console.log(this.isFollowing);
    if(this.artist.name == 'Nan' || this.artist.name == null){
      this.artist = null;
    // } else {
    //   this.userService.getUserArtistRating(this.id).subscribe(rating =>  {
    //     this.ratingComponent.currentRate = rating.rating;
    //     });
      // this.ratingComponent.currentRate 
    }
    
    },
    
    error => { console.log('error');
            this.artist = null;    
  });

    this.searchService.getAlbums(this.id).subscribe(album => {
      this.albums = album.data;
    });
  }

  isAlreadyFollowing(){
    return this.artistIds.includes(this.id);
  }

  followArtist(){
    console.log('bleh');
    this.searchService.postArtist(this.artist).subscribe(res => {
      console.log(res)
      this.isFollowing = true;
    });
  }

  unfollowArtist(){
    console.log('bleh');
    this.searchService.unfollowArtist(this.id).subscribe(res => {
      console.log(res);
      this.isFollowing = false;
    });
  }

}

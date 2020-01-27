import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-album-rating',
  templateUrl: './album-rating.component.html',
  styleUrls: ['./album-rating.component.css']
})
export class AlbumRatingComponent implements OnInit {

  
  currentRate: number = 0;

  constructor(private userService: UserService) { }

  @Input()
  album: Album;

  ngOnInit() {
    console.log(this.album);
    this.userService.getUserAlbumRating(this.album.id).subscribe(rating =>  {
      this.currentRate = rating.rating;
      console.log(this.currentRate);
      });
  }

  onRateChange(event: number) {
    if (!isNaN(event)){
      console.log(event);
      this.album.album_id = this.album.id;
      this.userService.rateAlbum(event, this.album).subscribe(res => console.log(res))
    }
  }


}

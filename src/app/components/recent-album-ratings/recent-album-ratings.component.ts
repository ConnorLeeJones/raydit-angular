import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recent-album-ratings',
  templateUrl: './recent-album-ratings.component.html',
  styleUrls: ['./recent-album-ratings.component.css']
})
export class RecentAlbumRatingsComponent{

  @Input()
  ratings: Array<any>;  

  constructor() {}

}

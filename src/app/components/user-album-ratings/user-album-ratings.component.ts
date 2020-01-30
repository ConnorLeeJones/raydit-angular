import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-user-album-ratings',
  templateUrl: './user-album-ratings.component.html',
  styleUrls: ['./user-album-ratings.component.css']
})
export class UserAlbumRatingsComponent {

  @Input()
  ratings: Array<any>;


  constructor() { }

}

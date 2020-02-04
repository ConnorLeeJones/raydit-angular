import { Component, OnInit } from '@angular/core';
import { Rating } from 'src/app/models/rating';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-recent-ratings',
  templateUrl: './recent-ratings.component.html',
  styleUrls: ['./recent-ratings.component.css']
})
export class RecentRatingsComponent implements OnInit {

  ratings: Rating[];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.getRecentRatings().subscribe(data => {
      this.ratings = data['content'];
      console.log(this.ratings[0]['userProfile']['username']);
      });
  }

}

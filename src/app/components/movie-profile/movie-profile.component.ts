import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-profile',
  templateUrl: './movie-profile.component.html',
  styleUrls: ['./movie-profile.component.css']
})
export class MovieProfileComponent implements OnInit {

  movie: Movie;
  id = this.route.snapshot.paramMap.get('id');


  constructor(private searchService: SearchService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(){
    this.searchService.getMovie(this.id).subscribe(movie => {
      this.movie = movie;
      if(this.movie.title == 'Nan' || this.movie.title == null){
        this.movie = null;
      console.log(this.movie);
    }
    
  },
  
  error => { console.log('error');
          this.movie = null;    
  });
  }


}

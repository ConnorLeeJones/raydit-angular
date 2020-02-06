import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})



export class MovieSearchComponent implements OnInit {

  searchMoviesCtrl = new FormControl();
  filteredMovies: any;
  isLoading = false;
  errorMsg: string;

  headerDict = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Authorization, Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  }

  requestOptions = {                                                                                                                                                                                 
    headers: new Headers(this.headerDict), 
  };


 
  constructor(
    private http: HttpClient
  ) { }
 
  ngOnInit() {
    this.searchMoviesCtrl.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {
          this.errorMsg = "";
          this.filteredMovies = [];
          this.isLoading = true;
        }),
        switchMap(value => this.http.get("http://www.omdbapi.com/?apikey=96e36df0=" + value, { headers: this.headerDict })
          .pipe(
            finalize(() => {
              this.isLoading = false
            }),
          )
        )
      )
      .subscribe(data => {
        if (data['Search'] == undefined) {
          this.errorMsg = data['Error'];
          this.filteredMovies = [];
        } else {
          this.errorMsg = "";
          this.filteredMovies = data['Search'];
        }
 
        console.log(this.filteredMovies);
      });
  }
}
 
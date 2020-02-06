import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { debounceTime, tap, switchMap, finalize, distinctUntilChanged, map, catchError } from 'rxjs/operators';
import { Artist } from 'src/app/models/artist';
import { SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})



export class MovieSearchComponent {

  model: any;
  searching = false;
  searchFailed = false;
  results: Array<any>;

  constructor(private _service: SearchService, private router: Router) {}

  // search = (text$: Observable<string>) =>
  //   text$.pipe(
  //     debounceTime(300),
  //     distinctUntilChanged(),
  //     tap(() => this.searching = true),
  //     switchMap(term =>
  //       this._service.searchMovies(term).pipe(
  //         tap(() => this.searchFailed = false),
  //         map((movies: Movie[]) => movies.map(movie => movie.title)),
  //         catchError(() => {
  //           this.searchFailed = true;
  //           console.log('error')
  //           return of([]);
  //         }))
  //     ),
  //     tap(() => this.searching = false)
  //   );
  
    onSubmit($event: any){
      console.log($event);
      this._service.searchMovies($event.item).subscribe(results =>
          {
          this.results = results;
          console.log(results);
          this.router.navigate(['/show/' + results[0].title])
          });
    }

    test(){
      console.log(this.model);
      this._service.searchMovies(this.model).subscribe(results =>
        {
        this.results = results;
        console.log(results['titles'][0]['id']);
        this.router.navigate(['/show/' + results['titles'][0]['id']])
        });
    }
}
 
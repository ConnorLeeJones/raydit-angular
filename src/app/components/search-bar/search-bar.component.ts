import {Component} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators';
import { SearchService } from 'src/app/services/search.service';
import { Artist } from 'src/app/models/artist';


@Component({
  selector: 'ngbd-typeahead-http',
  templateUrl: './search-bar.component.html',
  providers: [SearchService],
  styles: [`.form-control { width: 300px; display: inline; }`]
})
export class SearchBarComponent {
  model: any;
  searching = false;
  searchFailed = false;

  constructor(private _service: SearchService) {}

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this._service.search(term).pipe(
          tap(() => this.searchFailed = false),
          map((artists: Artist[]) => artists.map(artist => artist.name)),
          catchError(() => {
            this.searchFailed = true;
            console.log('error')
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )
}
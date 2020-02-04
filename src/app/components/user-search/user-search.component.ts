import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist';
import { SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap, map, catchError } from 'rxjs/operators';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  providers: [SearchService],
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {
  model: any;
  searching = false;
  searchFailed = false;
  results: User[];

  constructor(private _service: SearchService, private router: Router) {}

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this._service.searchUsers(term).pipe(
          tap(() => this.searchFailed = false),
          map((users: User[]) => users.map(user => user.username)),
          catchError(() => {
            this.searchFailed = true;
            console.log('error')
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    );
  
    onSubmit($event: any){
      console.log($event);

      this._service.searchUsers($event.item).subscribe(results =>
          {
          this.results = results;
          this.router.navigate(['/user/' + results[0].user_id])
          });
    }

}

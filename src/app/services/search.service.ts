import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { of} from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseData } from '../models/response-data';
import { environment } from 'src/environments/environment';
import { Artist } from '../models/artist';

const deezer_url = 'https://deezerdevs-deezer.p.rapidapi.com';
const key = environment.apiKey;
const headerDict = {
  'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
  'x-rapidapi-key': key,
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) {}


  search(term: string) {
    console.log(term)

    if (term.length < 3) {
      return of([]);
    }

    const parameters = new HttpParams().set('q', term);

    return this.http
      .get<ResponseData>(deezer_url + '/search/artist/autocomplete', {params: parameters, headers: headerDict}).pipe(
        map((response) =>
            response.data)
      );
  }

  getArtist(id: number){
    return this.http
    .get<Artist>(deezer_url + '/artist/' + id, {headers: headerDict});
  }

  getAlbums(id: number){
    return this.http
    .get<ResponseData>(deezer_url + '/artist/' + id + '/albums', {headers: headerDict});
  }


}


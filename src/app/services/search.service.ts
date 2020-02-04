import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { of, Observable} from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ResponseData } from '../models/response-data';
import { environment } from 'src/environments/environment';
import { Artist } from '../models/artist';
import { Album } from '../models/album';
import { User } from '../models/user';
import { Rating } from '../models/rating';

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

  getAlbum(id: number){
    return this.http
    .get<Album>(deezer_url + '/album/' + id, {headers: headerDict});
  }

  postArtist(artist: Artist){
    return this.http.post(`${environment.apiUrl}/artists`, artist);
  }

  getArtistsIdsByUser(id: number){
    return this.http.get<number[]>(`${environment.apiUrl}/user/${id}/artists/ids`);
  }

  getArtistsByUser(id: number){
    return this.http.get<Artist[]>(`${environment.apiUrl}/user/${id}/artists`);
  }

  unfollowArtist(id: number){
    return this.http.put(`${environment.apiUrl}/artist/${id}`, id);
  }

  getRecentRatings(){
    return this.http.get<Rating[]>(`${environment.apiUrl}/ratings/recent`);

  }

  searchUsers(term: string){
    console.log(term)

    if (term.length < 3) {
      return of([]);
    }

    return this.http.get<Artist[]>(`${environment.apiUrl}/users/search?searchTerm=` + term);
  }




}


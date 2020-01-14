import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { of} from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseData } from '../models/response-data';
import { environment } from 'src/environments/environment';

const deezer_url = 'https://deezerdevs-deezer.p.rapidapi.com/search/artist/autocomplete';
const key = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) {}


  search(term: string) {
    console.log(term)

    if (term.length < 3) {
      console.log('<3')
      return of([]);
    }



    const headerDict = {
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
      'x-rapidapi-key': key,
    }
    const parameters = new HttpParams().set('q', term);
    
    // return this.http.get(this.heroesUrl, requestOptions)
    console.log()
    this.http
      .get(deezer_url, {params: parameters, headers: headerDict}).subscribe(data =>{
        let d = data as ResponseData;
        console.log(d)
      })
    


    return this.http
      .get<ResponseData>(deezer_url, {params: parameters, headers: headerDict}).pipe(
        map((response) =>
            response.data)
      );
  }
}


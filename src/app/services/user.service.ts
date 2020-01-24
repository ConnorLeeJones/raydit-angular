import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { Rating } from '../models/rating';
import { Artist } from '../models/artist';

@Injectable({ providedIn: 'root' })
export class UserService {
    user: User;

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getuserById(id: number) {
        return this.http.get<User>(`${environment.apiUrl}/user/${id}`);
    }

    getUserRatings(id: number) {
        return this.http.get<Rating[]>(`${environment.apiUrl}/user/${id}/ratings`);
    }

    getUserArtistRating(id: number) {
        return this.http.get<Rating>(`${environment.apiUrl}/ratings/${id}`);
    }

    rateArtist(id: number, artist: Artist) {
        return this.http.post<Artist>(`${environment.apiUrl}/ratings/${id}`, artist);
    }


}
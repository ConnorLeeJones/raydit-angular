import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { Rating } from '../models/rating';
import { Artist } from '../models/artist';
import { Album } from '../models/album';
import { Movie } from '../models/movie';

@Injectable({ providedIn: 'root' })
export class UserService {
    user: User;

    constructor(private http: HttpClient) { }

    // getAll() {
    //     return this.http.get<User[]>(`${environment.apiUrl}/users`);
    // }

    getuserById(id: number) {
        return this.http.get<User>(`${environment.apiUrl}/user/${id}`);
    }

    getUserRatings(id: number) {
        return this.http.get<Rating[]>(`${environment.apiUrl}/user/${id}/ratings`);
    }

    getUserArtistRating(id: number) {
        return this.http.get<Rating>(`${environment.apiUrl}/ratings/${id}`);
    }

    getUserAlbumRating(id: number) {
        return this.http.get<Rating>(`${environment.apiUrl}/album/ratings/${id}`);
    }


    getUserAlbumRatings(id: number) {
        return this.http.get<Rating[]>(`${environment.apiUrl}/user/${id}/album/ratings`);
    }

    rateArtist(id: number, artist: Artist) {
        return this.http.post<Artist>(`${environment.apiUrl}/ratings/${id}`, artist);
    }

    rateAlbum(id: number, album: Album) {
        return this.http.post<Album>(`${environment.apiUrl}/album/ratings/${id}`, album);
    }

    rateMovie(id: number, movie: Movie) {
        return this.http.post<Movie>(`${environment.apiUrl}/movies/ratings/${id}`, movie);
    }

    getUserMovieRating(id: string) {
        return this.http.get<Rating>(`${environment.apiUrl}/movies/ratings/${id}`);
    }


    getUserMovieRatings(id: string) {
        return this.http.get<Rating[]>(`${environment.apiUrl}/user/${id}/movies/ratings`);
    }

    getUserFriendIds(){
        return this.http.get<number[]>(`${environment.apiUrl}/friends/user/ids`);
    }

    addFriend(userId: number, friendId: number){
        return this.http.post(`${environment.apiUrl}/friends/add?userId=` + userId + '&friendId=' + friendId, {});
    }



    getUserPaginatedRatings(selected: string, id: number, pageNo: number, sortBy: string){
        return this.http.get(`${environment.apiUrl}/` + selected + `/ratings?id=` + id + '&pageNo=' + pageNo + '&sortBy=' + sortBy);
    }


}
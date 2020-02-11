import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private http: HttpClient) { }



  getFriendPaginatedRatings(selected: string, pageNo: number){
    return this.http.get(`${environment.apiUrl}/` + selected + `/ratings/friends?&pageNo=` + pageNo);
  }

}

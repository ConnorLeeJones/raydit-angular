import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../models/artist';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../services/search.service';
import { Album } from '../models/album';



@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.component.html',
  styleUrls: ['./artist-profile.component.css']
})
export class ArtistProfileComponent implements OnInit {

  artist: Artist;
  albums: Album[];
  show: boolean;

  constructor(private searchService: SearchService,
              private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(){
    const id = +this.route.snapshot.paramMap.get('id');

    this.searchService.getArtist(id).subscribe(artist => {
    this.artist = artist;
    });

    this.searchService.getAlbums(id).subscribe(album => {
      this.albums = album.data;
      });

    console.log(this.artist)
  }

}

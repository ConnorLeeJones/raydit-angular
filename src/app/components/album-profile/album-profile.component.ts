import { Component, OnInit } from '@angular/core';
import { Artist } from '../../models/artist';
import { Album } from '../../models/album';
import { SearchService } from '../../services/search.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-album-profile',
  templateUrl: './album-profile.component.html',
  styleUrls: ['./album-profile.component.css']
})
export class AlbumProfileComponent implements OnInit {

  artist: Artist;
  album: Album
  show: boolean;
  id = +this.route.snapshot.paramMap.get('id');


  constructor(private searchService: SearchService,
              private route: ActivatedRoute, private authService: AuthenticationService) { 

  }

  ngOnInit(): void {
    this.getAlbum();
  }



  getAlbum(){
    this.searchService.getAlbum(this.id).subscribe(album => {
      this.album = album;
      if(this.album.title == 'Nan' || this.album.title == null){
        this.album = null;
      console.log(this.album);
    }
    
  },
  
  error => { console.log('error');
          this.album = null;    
  });
  }





}

import { Artist } from './artist';
import { Album } from './album';

export class Rating {
    id: any;
    rating: number;
    artist: Artist;
    album: Album;
    createdDate: Date;
    modifiedDate: Date;

    constructor(){}
}

import { Injectable } from '@angular/core';

import { albums } from 'src/data/albums';
import { Album } from 'src/interface/AlbumInterface';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private albums: Album[] = albums;
  album!: Album | null;

  constructor( ) { }

  getAlbums(){
    return this.albums;
  };

  getAlbum(id: number){
    return this.albums.find(album => album.id === id) ?? null;
  };

  getSongs(){
    return this.albums.flatMap(a=>a.songs);
  };

}

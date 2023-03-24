import { Component } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Album } from 'src/interface/AlbumInterface';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['../home/home.component.scss']
})
export class AlbumsComponent {
  albums: Album[];
  constructor(private storeService: StoreService){
    this.albums = this.storeService.getAlbums();
  }
}

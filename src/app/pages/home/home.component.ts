import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Album } from 'src/interface/AlbumInterface';
import { Song } from 'src/interface/SongInterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  albums: Album[];
  songs: Song[];

  constructor(private storeService: StoreService){
    this.albums = this.storeService.getAlbums();
    this.songs=this.storeService.getSongs();
  }

  ngOnInit(): void {
    // console.log(this.albums);
    // console.log(this.songs);
  }
}


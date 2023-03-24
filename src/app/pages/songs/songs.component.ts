import { Component } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Song } from 'src/interface/SongInterface';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['../home/home.component.scss']
})
export class SongsComponent {
  songs: Song[];
  constructor(private storeService: StoreService){
    this.songs = this.storeService.getSongs();
  }
}

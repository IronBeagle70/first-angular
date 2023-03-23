import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Song } from 'src/interface/SongInterface';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['../home/home.component.scss']
})
export class SongsComponent {
  songs: Song[];
  constructor(private appComponent: AppComponent){
    this.songs = this.appComponent.songs;
  }
}

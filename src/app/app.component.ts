import { Component } from '@angular/core';
import { albums } from 'src/data/albums';
import { Album } from 'src/interface/AlbumInterface';
import { Song } from 'src/interface/SongInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  albums: Album[] = albums;
  songs: Song[] = albums.flatMap(a=>a.songs);
  showNames = false;

  toggleNames(){
    this.showNames = !this.showNames;
  }
}

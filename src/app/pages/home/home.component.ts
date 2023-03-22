import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
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

  constructor(private appComponent: AppComponent){
    this.albums = this.appComponent.albums
    this.songs = this.appComponent.songs;
  }

  ngOnInit(): void {
    console.log(this.albums);
    console.log(this.songs);

  }

  // getSongs(){
  //   this.songs = this.albums.flatMap(a=>a.songs);
  // }
}
// routerLinkActive="estilos"
// [routerLinkActiveOptions]="{exact: true}"

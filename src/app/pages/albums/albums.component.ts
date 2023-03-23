import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Album } from 'src/interface/AlbumInterface';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['../home/home.component.scss']
})
export class AlbumsComponent {
  albums: Album[];
  constructor(private appComponent: AppComponent){
    this.albums = this.appComponent.albums;
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Album } from 'src/interface/AlbumInterface';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {

  albums: Album[];
  album!: Album | null;

  constructor(private route: ActivatedRoute, private appComponent: AppComponent ){
    this.albums = this.appComponent.albums;
  }

  ngOnInit(): void{
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? parseInt(idParam, 10) : 0;
    this.album = this.albums.find(album => album.id === id) ?? null;
  }
}

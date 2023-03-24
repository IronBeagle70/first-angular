import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Album } from 'src/interface/AlbumInterface';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {

  album!: Album | null;
  
  constructor( private route: ActivatedRoute, private storeService: StoreService ){
  }

  ngOnInit(): void{
    const id = this.getRouteParam();
    this.album = this.storeService.getAlbum(id);
  }

  getRouteParam(){
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? parseInt(idParam, 10) : 0;
    return id;
  };

}

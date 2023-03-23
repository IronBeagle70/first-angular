import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailComponent } from './pages/album-detail/album-detail.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { HomeComponent } from './pages/home/home.component';
import { SongsComponent } from './pages/songs/songs.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'albums',
    component: AlbumsComponent
  },
  {
    path: 'songs',
    component: SongsComponent
  },
  {
    path: 'albums/:id',
    component: AlbumDetailComponent
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

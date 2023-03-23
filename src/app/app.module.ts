import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { SongsComponent } from './pages/songs/songs.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AlbumDetailComponent } from './pages/album-detail/album-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumsComponent,
    SongsComponent,
    SidebarComponent,
    AlbumDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { MainComponent } from './main/main.component';
import { AlbumComponent } from './album/album.component';
import { SongComponent } from './song/song.component';


const routes: Routes = [
 {path: 'home', component: MainComponent},
 {path: '', component: MainComponent},
 {path: 'artist', component: ArtistComponent},
 {path: 'artist/:id', component: ArtistComponent},
 {path: 'album/:id', component: AlbumComponent},
 {path: 'song/:id', component: SongComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

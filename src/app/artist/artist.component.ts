import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  nbrAlbums:number = 0;
  nbrSongs:number = 0;
  listAlbums:any[] = [];
  
  constructor(private http:HttpClient,private route: ActivatedRoute,) { }
  ngOnInit() {
    var id = this.route.snapshot.paramMap.get('id');
    var get = this.http.get('https://wasabi.i3s.unice.fr/api/v1/artist/name/'+id);
    get.subscribe((data: any[])=>{
      this.getInfo(data);
    })

  }

  getInfo(id){
    this.raz();
    var id = id._id;
    var get = this.http.get('https://wasabi.i3s.unice.fr/api/v1/artist_all/id/'+id);
    get.subscribe((data: any)=>{
      this.nbrAlbums = data.albums.length;
      for (let i = 0; i < data.albums.length; i++) {
        this.nbrSongs = this.nbrSongs + data.albums[i].songs.length
        if (data.albums[i].cover) {
          this.listAlbums.push(data.albums[i]);
        }
      }
    })
    
  }
  raz(){
    this.nbrAlbums = 0;
    this.nbrSongs = 0;
  }

}
